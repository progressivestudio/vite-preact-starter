// eslint-disable-next-line no-undef
const cx = (...classNames: ReadonlyArray<string | boolean | undefined>): string => classNames.filter(Boolean).join(" ");

export { cx };
