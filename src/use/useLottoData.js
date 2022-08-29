export function useLottoData() {

    const game = {
        bigLotto: {
            bigDraw: [14, 15, 22, 25, 32, 44, 45],
            bigDate: "Saturday, June 22 2022",
        },
        luckyLotto: {
            draw: [14, 15, 22, 25, 32, 44],
            date: "Monday, June 5 2022",
        },
        spinLotto: {
            draw: [9, 10, 11, 12, 13, 14],
            date: "Tuesday, June 12 2022",
        },
        getMore: "2669471"
    }

    return {
        game
    }

}