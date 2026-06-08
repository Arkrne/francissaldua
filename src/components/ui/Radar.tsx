import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec3 uColor;
uniform vec3 uBgColor;

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st = st * 2.0 - 1.0;
  st.x *= uResolution.x / uResolution.y;
  
  float dist = length(st);
  float t = uTime * 0.5;
  
  // Subtle radial rings
  float rings = sin(dist * 20.0 - t * 2.0) * 0.5 + 0.5;
  rings *= smoothstep(1.0, 0.0, dist);
  
  // Sweep beam
  float angle = atan(st.y, st.x) + t;
  float beam = smoothstep(0.0, 0.1, sin(angle * 5.0) * 0.5 + 0.5);
  
  vec3 col = uColor * rings * beam * 0.3;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Radar() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current as HTMLDivElement;
    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    
    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
    window.addEventListener('resize', resize);
    resize();

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height] },
        uColor: { value: [0.11, 0.42, 0.42] }, // #1d6b6b
        uBgColor: { value: [0.12, 0.12, 0.12] }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    container.appendChild(gl.canvas);

    let id: number;
    function update(time: number) {
      id = requestAnimationFrame(update);
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    }
    id = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', resize);
      container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 opacity-20" />;
}
