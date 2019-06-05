export class MenuItem {
    id: number;
    title: string;
    icon: string;
    routeLink: string;

    constructor(
        id,
        title,
        icon,
        routeLink
    ) {
        this.id = id;
        this.title = title;
        this.icon = icon;
        this.routeLink = routeLink
    }
}