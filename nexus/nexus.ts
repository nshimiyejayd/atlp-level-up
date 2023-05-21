/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  LoginType: { // root type
    email?: string | null; // String
    token?: string | null; // String
  }
  Mutation: {};
  Query: {};
  cardsType: { // root type
    answer?: string | null; // String
    id?: number | null; // Int
    isDone?: boolean | null; // Boolean
    question?: string | null; // String
    userId?: number | null; // Int
  }
  getCardsType: { // root type
    cards?: Array<NexusGenRootTypes['cardsType'] | null> | null; // [cardsType]
    userId?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  LoginType: { // field return type
    email: string | null; // String
    token: string | null; // String
  }
  Mutation: { // field return type
    createCard: boolean | null; // Boolean
    login: NexusGenRootTypes['LoginType'] | null; // LoginType
    markCard: boolean | null; // Boolean
    registerUser: boolean | null; // Boolean
  }
  Query: { // field return type
    getCards: NexusGenRootTypes['getCardsType'] | null; // getCardsType
    userLogin: NexusGenRootTypes['LoginType'] | null; // LoginType
    welcome: string | null; // String
  }
  cardsType: { // field return type
    answer: string | null; // String
    id: number | null; // Int
    isDone: boolean | null; // Boolean
    question: string | null; // String
    userId: number | null; // Int
  }
  getCardsType: { // field return type
    cards: Array<NexusGenRootTypes['cardsType'] | null> | null; // [cardsType]
    userId: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  LoginType: { // field return type name
    email: 'String'
    token: 'String'
  }
  Mutation: { // field return type name
    createCard: 'Boolean'
    login: 'LoginType'
    markCard: 'Boolean'
    registerUser: 'Boolean'
  }
  Query: { // field return type name
    getCards: 'getCardsType'
    userLogin: 'LoginType'
    welcome: 'String'
  }
  cardsType: { // field return type name
    answer: 'String'
    id: 'Int'
    isDone: 'Boolean'
    question: 'String'
    userId: 'Int'
  }
  getCardsType: { // field return type name
    cards: 'cardsType'
    userId: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCard: { // args
      answer: string; // String!
      isDone: boolean; // Boolean!
      question: string; // String!
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    markCard: { // args
      cardId: number; // Int!
      isDone: boolean; // Boolean!
    }
    registerUser: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}