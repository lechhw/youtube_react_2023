import axios from 'axios';

export default class FakeYoutube {
    // constructor() {}

    async search(keyword) {
        // #함수명 : 프라이빗 함수 -> 함수명 앞에 # 을 붙이면 js 에선 프라이빗함수가 된다.
        // 프라이빗 함수란 클래스 내부에선 호출이 가능하나, 클래스 외부에선 호출할 수 없다.
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword() {
        return axios
            .get(`/videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    }

    async #mostPopular() {
        return axios.get(`/videos/popular.json`).then((res) => res.data.items);
    }
}
