//random diem thi
const getRandomMark = (start = 6, end = 10, step = 0.5) => Math.floor((Math.random() * ((end - start) / step + 1) + start / step)) * step

function student(name) {
    this.name = name
    this.maths = getRandomMark()
    this.literature = getRandomMark()
    this.physics = getRandomMark()
    this.chemistry = getRandomMark()
    this.biology = getRandomMark()
}

let diemthi = [
    { ...new student('A') },
    { ...new student('B') },
    { ...new student('C') },
    { ...new student('D') }
]

// tinh diem trung binh
const average = (x = diemthi) => {
    let averagePoint = []
    for (let student of x) {
        // console.log(Object.keys(student).length);                                                                                                                                                      
        let sum = 0
        for (let x in student) {
            if (x !== 'name') {
                if (x === 'maths' || x === 'literature') {
                    sum += student[x] * 2
                } else {
                    sum += student[x]
                }
            }
        }
        let avgPoint = Math.round(sum / (Object.keys(student).length + 1) * 100) / 100
        averagePoint.push({
            name: student.name,
            avgPoint
        })
    }
    return averagePoint
}

// loc nhung nguoi co diem trung binh > 8
const filterPoint = () => average().filter(x => x.avgPoint >= 8)

// nguoi co diem thi van thap nhat
const lowestLiterature = () => {
    return diemthi.reduce((x, y) => x.literature >= y.literature ? y : x)
}

// nguoi co diem trung binh cao nhat
const hightestPoint = () => {
    return average().reduce((x, y) => x.avgPoint >= y.avgPoint ? x : y)
}

// clone
// const cloneDiemThi = () => JSON.parse(JSON.stringify(diemthi))
// JSON.parse(JSON.stringtify()) không dùng được nếu có trường là undefined hoặc null

const clone = input => {
    let newArr = (input instanceof Array) ? [] : {};
    for (let i in input) {
        if (input[i] && typeof input[i] == "object") {
            newArr[i] = clone(input[i]);
        }
        else {
            newArr[i] = input[i];
        }
    }
    return newArr;
};

console.log(clone(diemthi))

// tien thuong
const bonusMoney = () => {
    let bonus = []
    for (let student of diemthi) {
        let sumMoney = 0
        for (let x in student) {
            if (x !== 'name') {
                if (student[x] >= 8 && student[x] < 9) {
                    ++sumMoney
                } else if (student[x] >= 9 && student[x] < 10) {
                    sumMoney += 2
                } else if (student[x] == 10) {
                    sumMoney += 5
                }
            }
        }
        bonus.push({
            name: student.name,
            sumMoney
        })
    }
    return bonus
}

const randomDate = (start, end) => {
    return (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).toDateString();
}

const diemThi10Lan = () => {
    let diem = []
    let random = Math.floor((Math.random() * 10))
    for (let i = 1; i < 11; i++) {
        diem.push({
            lanThi: i,
            ngayThi: randomDate(new Date(2020, 0, 1), new Date()),
            diemthi
        })
    }
    let diemRandom = diem[random]
    let avgRandom = average(diemRandom.diemthi)
    let a = {
        lanThi: diemRandom.lanThi,
        ngayThi: diemRandom.ngayThi,
        diemTb: avgRandom
    }
    return a
}
