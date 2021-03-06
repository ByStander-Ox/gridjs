import { ComponentChild } from 'preact';
import Row from './row';
import { SortConfig } from './view/plugin/sort/sort';
import { JSXInternal } from 'preact/src/jsx';

export type ProtoExtends<T, U> = U & Omit<T, keyof U>;

export type OneDArray<T> = T[];
export type TwoDArray<T> = T[][];

/**
 * Table cell types
 */
export type TCell = number | string | boolean | ComponentChild | HTMLElement;
// Array of Arrays
export type TDataArrayRow = OneDArray<TCell>;
export type TDataArray = OneDArray<TDataArrayRow>;
// Array of Objects
export type TDataObjectRow = { [key: string]: TCell };
export type TDataObject = OneDArray<TDataObjectRow>;
// (Array of Arrays) and (Array of Objects)
export type TData = TDataArray | TDataObject;

// Table header cell type
export interface TColumn {
  id?: string | ((row: TDataArrayRow | TDataObjectRow) => string);
  name: string | ComponentChild;
  width?: string;
  sort?: SortConfig;
  children?: OneDArray<TColumn>;
  fixedHeader?: boolean;
  formatter?: (cell: TCell, row: Row, column: TColumn) => ComponentChild;
  attributes?:
    | ((
        cell: TCell,
        row: Row,
        column: TColumn,
      ) => JSXInternal.HTMLAttributes<HTMLTableCellElement>)
    | JSXInternal.HTMLAttributes<HTMLTableCellElement>;
}

// Comparator function for the sorting plugin
export type Comparator<T> = (a: T, b: T) => number;

export interface TColumnSort {
  index: number;
  // 1 ascending, -1 descending
  direction?: 1 | -1;
}

// container status
export enum Status {
  Init,
  Loading,
  Loaded,
  Rendered,
  Error,
}

export type CSSDeclaration = {
  [key: string]: string;
};
