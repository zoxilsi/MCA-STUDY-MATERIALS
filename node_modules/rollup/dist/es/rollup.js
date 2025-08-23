/*
  @license
	Rollup.js v4.46.4
	Wed, 20 Aug 2025 05:32:50 GMT - commit bc353578bbde60d644d0d4ed5fb3b121aec19fd7

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
