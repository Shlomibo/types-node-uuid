declare function uuid(): void;
declare namespace uuid {

	export interface RNG {
		(): Buffer;
	}
	export interface V1Options {
		node?: [number, number, number, number, number, number];
		clockseq?: number;
		msecs?: number | Date;
		nsecs?: number | Date;
	}
	export interface V4Options {
		random?: number[];
		rng?: RNG;
	}

	export type BufferType = number[] | Buffer | Uint8Array;

	export function v1(options?: V1Options): string;
	export function v1(options: V1Options, buffer?: BufferType): BufferType | string;
	export function v1(options: V1Options, buffer: BufferType, offset?: number): BufferType;

	export function v4(options?: V4Options): string;
	export function v4(options: V4Options, buffer?: BufferType): BufferType | string;
	export function v4(options: V4Options, buffer: BufferType, offset?: number): BufferType;

	export function parse(uuid: string, buffer?: BufferType): BufferType;
	export function parse(uuid: string, buffer: BufferType, offset?: number): BufferType;
	export function unparse(buffer: BufferType, offset?: number): string;

	export const _rng: RNG;
	export const _mathRNG: RNG;
	export const _nodeRNG: RNG;
	export const _whatwgRNG: RNG;
	export const BufferClass: typeof Buffer | typeof Array;

}
export = uuid;