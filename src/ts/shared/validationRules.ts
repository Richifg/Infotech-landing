import { IRules, isFileInfo } from 'interfaces';
import { Validate } from 'react-hook-form';

// returns a validate object
const getValidateFunction = (rules: IRules): Validate => (data) => {
  if (rules) {
    if (data) {
      if (typeof data === 'string') {
        if (rules.maxLength && data.length > rules.maxLength)
          return `Máximo ${rules.maxLength} caractéres`;
        if (rules.minLength && data.length < rules.minLength)
          return `Mínimo ${rules.minLength} caractéres`;
      }
      if (isFileInfo(data)) {
        const ext = data.name.split('.').reverse()[0];
        if (rules.fileType && ext !== rules.fileType) return `Archivo debe ser de tipo ${ext}`;
        if (rules.size && data.size > rules.size) return `Máximo tamaño de archivo ${rules.size}`;
      }
    } else {
      if (rules.required) return 'Respuesta requerida';
    }
  }
  return true;
};

export { getValidateFunction };
