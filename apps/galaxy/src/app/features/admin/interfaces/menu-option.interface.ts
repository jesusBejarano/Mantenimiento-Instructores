import { UserRol } from '@galaxy/commons/models';
export interface MenuOption {
    title: string;
    icon: string;
    url: string;
    roles: UserRol[];
}
