export default class User {
    constructor() {
        this.profile = {}
    }

    get profile() {
        return this.profile;
    }

    static setProfile(profile) {
        const installDate = new Date(profile.app_installed_at);
        const premiumUpdateDate = new Date('2020-03-18T00:00:02.578Z');

        this.profile = {
            isPremium: profile.plan === 'paid',
            installedBeforePremiumUpdate: installDate < premiumUpdateDate
        };
    }

    static setNumPublishedPopups(num){
        this.profile = {
            ...this.profile,
            numPublishedPopups: num
        }
    }
}