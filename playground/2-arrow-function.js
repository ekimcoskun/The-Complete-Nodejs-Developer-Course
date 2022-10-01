// const square = (x) => x*x

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Ekim', 'Coskun', 'Mert'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()