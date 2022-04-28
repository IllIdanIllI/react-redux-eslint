declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: any;
  export default src;
}

declare module '*.png' {
  const src: any;
  export default src;
}

declare module '*.jpg' {
  const src: any;
  export default src;
}

declare module '*.jpeg' {
  const src: any;
  export default src;
}

declare module '*.webm' {
  const src: any;
  export default src;
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.gif' {
  const src: any;
  export default src;
}
