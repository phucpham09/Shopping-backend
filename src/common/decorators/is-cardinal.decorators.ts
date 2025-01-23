import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive, ValidationOptions } from 'class-validator';
/**
 * Checks if the value is a positive integer.
 */
export const IsCardinal = (
  validationOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(IsPositive(validationOptions), IsInt(validationOptions));
