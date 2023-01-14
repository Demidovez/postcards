export enum TextAlign {
    LEFT,
    RIGHT,
    CENTER,
    JUSTIFY,
}

export const TextWeight: {
    [key: string]: number;
} = {
  'Light': 300,
  'Regular': 400,
  'Bold': 600,
};

export enum SettingsTextStatus {
    APPLIED,
    EDITING,
}