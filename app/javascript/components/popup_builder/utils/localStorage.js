export default {
    namespace: 'ccpops-',

    write(key, value) {
        try {
            localStorage.setItem(this.namespace + key, JSON.stringify(value));
        } catch (e) {
            console.log('localStorage not available');
        }
    },

    read(key) {
        try {
            let item = localStorage.getItem(this.namespace + key);
            return JSON.parse(item);
        } catch (e) {
            console.log('localStorage not available');
        }
    }
}
