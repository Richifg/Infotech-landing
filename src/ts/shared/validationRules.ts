import { IRules } from 'interfaces';
import { Validate } from 'react-hook-form';

const validate = (rules: IRules): Validate => (data) => {
  if (rules) {
    console.log(rules);
    if (data) {
      console.log(data);
      if (typeof data === 'string') {
        if (rules.maxLength && data.length > rules.maxLength) return `Exceeded max length`;
        if (rules.minLength && data.length < rules.minLength) return `blabla add more chars`;
      }
      if (data instanceof FileList) {
        if (data[0]) {
          const file = data[0];
          const ext = file.name.split('.').reverse()[0];
          if (rules.fileType && ext !== rules.fileType) return `Wrong file type`;
          if (rules.size && file.size > rules.size) return `File is too big`;
        } else {
          if (rules.required) return 'Es necesario adjuntar el archvivo';
        }
      }
    } else {
      if (rules.required) return 'Campo requerido';
    }
  }
  return true;
};

export { validate };
