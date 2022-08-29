import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator'
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/lib/index.js',
  plugins: [
    terser(),
    obfuscatorPlugin({
      compact: true
    })
  ],
  output: {
    format: 'cjs',
    file: 'dist/metrics-unit-convertion.js'
  }
};
