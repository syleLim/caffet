function solution(brown, red) {
    let a = 0;
    let b;
    if (red === 1)
        return [3, 3];
    while (++a <= parseInt(red / 2))
    {
        b = parseInt(red / a);
        if ((a + 2) * (b + 2) === brown + red && a * b === red)
            return [b + 2, a + 2];
    }
}