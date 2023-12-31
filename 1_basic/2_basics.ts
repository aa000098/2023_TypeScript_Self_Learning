/**
 * Types
 */
let helloText: string = 'Hello';
// helloText = true;

/**
 * JS에 존재하는 
 * 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999999);
// tsconfig.json target 2016에서 2020 버전으로 바꿔주기
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
//any - 아무 타입이나 입력할 수 있는 치트키같은 타입
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// let testNumber2: number = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용되는 타입
// let neverType: never = null;

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ['아이브', '레드벨벳', '블랙핑크'];





