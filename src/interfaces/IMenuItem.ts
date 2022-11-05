export default interface IMenuItem {
    href: string,
    title: string,
    onClick: (e: MouseEvent) => void
}