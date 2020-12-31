// Checking the winning positions
export let checkWinner = (currentFields, player) => {
    const nums = [0, 3, 6]
    const rows = [0, 1, 2]
    let message = {
        "message": "Deal.",
        "canContinue": true
    }
    nums.forEach((val) => {
        if (currentFields[val] != "" && currentFields[val + 1] != "" && currentFields[val + 2] != "") {
            if ((currentFields[val].valueOf() == currentFields[val + 1].valueOf()) && (currentFields[val].valueOf() == currentFields[val + 2].valueOf())) {
                message = {
                    "message": "Player " + player + " wins with a line.",
                    "canContinue": false
                }
            }
        }
    })

    rows.forEach(function (val) {
        if (currentFields[val] != "" && currentFields[val + 3] != "" && currentFields[val + 6] != "") {
            if ((currentFields[val].valueOf() == currentFields[val + 3].valueOf()) && (currentFields[val].valueOf() == currentFields[val + 6].valueOf())) {
                message = {
                    "message": "Player " + player + " wins with a row.",
                    "canContinue": false
                }
            }
        }
    })

    if (currentFields[0] != "" && currentFields[4] != "" && currentFields[8] != "") {
        if ((currentFields[0].valueOf() == currentFields[4].valueOf()) && (currentFields[0].valueOf() == currentFields[8].valueOf())) {
            message = {
                "message": "Player " + player + " wins with a diagonal.",
                "canContinue": false
            }
        }
    }

    if (currentFields[2] != "" && currentFields[4] != "" && currentFields[6] != "") {
        if ((currentFields[2].valueOf() == currentFields[4].valueOf()) && (currentFields[2].valueOf() == currentFields[6].valueOf())) {
            message = {
                "message": "Player " + player + " wins with a diagonal.",
                "canContinue": false
            }
        }
    }

    return message
}