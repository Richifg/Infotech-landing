import { IRules, IFileInfo } from 'interfaces';
import { Validate } from 'react-hook-form';

// returns a validate object
export const getValidFunctionInput = (rules: IRules): Validate => (data) => {
  if (rules) {
    if (data) {
      if (rules.maxLength && data.length > rules.maxLength)
        return `Máximo ${rules.maxLength} caractéres`;
      if (rules.minLength && data.length < rules.minLength)
        return `Mínimo ${rules.minLength} caractéres`;
    } else {
      if (rules.required) return 'Respuesta requerida';
    }
  }
  return true;
};

export const getValidFunctionFile = (rules: IRules): Validate => (data: IFileInfo) => {
  if (rules) {
    if (data) {
      const ext = data.name.split('.').reverse()[0];
      if (rules.fileType && ext !== rules.fileType)
        return `Archivo debe ser de tipo ${rules.fileType}`;
      if (rules.size && data.size > rules.size * 1024 * 1024)
        return `Archivo excede el tamáño máximo de ${rules.size} MB`;
    } else {
      if (rules.required) return 'Archivo requerido';
    }
  }
  return true;
};
