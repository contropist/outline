declare module "autotrack/autotrack.js";

declare module "emoji-mart";

declare module "string-replace-to-array";

declare module "sequelize-encrypted";

declare module "styled-components-breakpoint";

declare module "*.png" {
  const value: any;
  export = value;
}

declare namespace JSX {
  interface IntrinsicElements {
    "em-emoji": any;
  }
}
