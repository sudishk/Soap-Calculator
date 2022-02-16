// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param, HttpErrors} from '@loopback/rest';
import {
  CalculatorService,
  CalculatorParameters,
  AddResponse,
  MultiplyResponse,
  DivideResponse,
  SubtractResponse,
} from '../services/calculator.service';

export class CalculatorController {
  // constructor() {}
  constructor(
    @inject('services.CalculatorService')
    protected calculatorService: CalculatorService,
  ) {}

  @get('/divide/{intA}/{intB}')
async divide(
  @param.path.integer('intA') intA: number,
  @param.path.integer('intB') intB: number,
): Promise<DivideResponse> {
  //Preconditions
  if (intB === 0) {
    throw new HttpErrors.PreconditionFailed('Cannot divide by zero');
  }
  return this.calculatorService.divide(<CalculatorParameters>{
    intA,
    intB,
  });
}
@get('/multiply/{intA}/{intB}')
async multiply(
  @param.path.integer('intA') intA: number,
  @param.path.integer('intB') intB: number,
): Promise<MultiplyResponse> {
  return this.calculatorService.multiply(<CalculatorParameters>{
    intA,
    intB,
  });
}
@get('/add/{intA}/{intB}')
async add(
  @param.path.integer('intA') intA: number,
  @param.path.integer('intB') intB: number,
): Promise<AddResponse> {
  return this.calculatorService.add(<CalculatorParameters>{
    intA,
    intB,
  });
}

@get('/subtract/{intA}/{intB}')
async subtract(
  @param.path.integer('intA') intA: number,
  @param.path.integer('intB') intB: number,
): Promise<SubtractResponse> {
  return this.calculatorService.subtract(<CalculatorParameters>{
    intA,
    intB,
  });
}

}
