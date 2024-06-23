import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from 'rollup-plugin-typescript2';
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "lib",
      format: "esm",
      sourcemap: true,
    },
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      typescript(),
      resolve(),
      postcss(),
      terser(),
      image()
    ],
  },
]