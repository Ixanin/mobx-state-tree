import { WishListItem, WishList } from "./WishList"

it('can create a instance of a model', () => {
    const item = WishListItem.create({
        "name": 'Narnia',
        "price": 26.25,
        "image": ''
    })

    expect(item.price).toBe(26.25)
    expect(item.image).toBe('')
})

it('can create a wishlist', () => {

    const list = WishList.create({
        items: [
            {
                "name": 'Narnia',
                "price": 26.25,
                "image": ''
            },
            {
                "name": 'Toster',
                "price": 16.15,
                "image": ''
            }
        ]
    })

    expect(list.items.length).toBe(2)
    expect(list.items[0].price).toBe(26.25)


})