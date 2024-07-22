const tree = {
    value: 3,
    children: [
        {
            value: 1,
            children: []
        },
        {
            value: 4,
            children: []
        },
        {
            value: 3,
            children: [
                {
                    value: 8,
                    children: [
                        {
                            value: 2,
                            children: []
                        },
                        {
                            value: 5,
                            children: []
                        }
                    ]
                },
                {
                    value: 0,
                    children: []
                }
            ]
        },
    ]
}

function sumOfValue(node) {
    if(!node) {
        return 0
    }

    let sum = 0

    if(node.value % 2 === 0) {
        sum += node.value;
    }

    for (let child of node.children) {
        sum += sumOfValue(child)
    }

    return sum
}

const result = sumOfValue(tree)
console.log(result)