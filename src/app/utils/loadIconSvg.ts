export const iconDir = 'assets/icons';

export const loadIconSvg = (iconRegistry, sanitizer) => {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/menu.svg`));
    iconRegistry.addSvgIcon(
        'anime',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/anime.svg`));
    iconRegistry.addSvgIcon(
        'game',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/game.svg`));
    iconRegistry.addSvgIcon(
        'music',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/music.svg`));
    iconRegistry.addSvgIcon(
        'login',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/login.svg`));
    iconRegistry.addSvgIcon(
        'sign',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/sign.svg`));
    iconRegistry.addSvgIcon(
        'ok',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/ok.svg`));
    iconRegistry.addSvgIcon(
        'arrow-right',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/arrow-circle-right.svg`));
    iconRegistry.addSvgIcon(
        'house',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/house.svg`));
    iconRegistry.addSvgIcon(
        'arrow-down',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/arrow-down.svg`));
    iconRegistry.addSvgIcon(
        'theme-light-dark',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/theme-light-dark.svg`));
    iconRegistry.addSvgIcon(
        'add',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    iconRegistry.addSvgIcon(
        'add-big',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/add-big.svg`));
    iconRegistry.addSvgIcon(
        'fileset',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/fileset.svg`));
    iconRegistry.addSvgIcon(
        'search',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/search.svg`));
    iconRegistry.addSvgIcon(
        'search-disable',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/search-disable.svg`));
    iconRegistry.addSvgIcon(
        'pro',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/pro.svg`));
    iconRegistry.addSvgIcon(
        'detail',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/detail.svg`));
    iconRegistry.addSvgIcon(
        'import',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/import.svg`));
    iconRegistry.addSvgIcon(
        'modify',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/modify.svg`));
    iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    iconRegistry.addSvgIcon(
        'precise',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/precise.svg`));
    iconRegistry.addSvgIcon(
        'volt',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/volt.svg`));
    iconRegistry.addSvgIcon(
        'footprint',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/footprint.svg`));
    iconRegistry.addSvgIcon(
        'value',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/value.svg`));
    iconRegistry.addSvgIcon(
        'childType',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/childType.svg`));
    iconRegistry.addSvgIcon(
        'marking',
        sanitizer.bypassSecurityTrustResourceUrl(`${iconDir}/marking.svg`));
};
