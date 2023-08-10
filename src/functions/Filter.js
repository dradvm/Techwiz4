let productsList = [ //test mảng sản phẩm, thay bằng mảng thật import vào
    [1,
    {
        Categories: ["Indoor", "Succulent"],
        pName: 'Elephant ears',
        price: 35
    }],
    [2,
    {
        Categories: ["Outdoor", "Need light"],
        pName: 'Elephant ears',
        price: 35
    }],
    [3,
    {
        Categories: ["Medicine", "Succulent"],
        pName: 'Elephant ears',
        price: 35
    }],
    [4,
    {
        Categories: ["Apple", "Outdoor"],
        pName: 'Elephant ears',
        price: 35
    }],
    [5,
    {
        Categories: ["Cactus", "Outdoot"],
        pName: 'Elephant ears',
        price: 35
    }],
    [6,
    {
        Categories: ["Cactus", "Outdoot"],
        pName: 'Elephant ears',
        price: 35
    }],
    [7,
    {
        Categories: ["Cactus", "Outdoot"],
        pName: 'Elephant ears',
        price: 35
    }],
    [8,
    {
        Categories: ["Cactus", "Outdoot"],
        pName: 'Elephant ears',
        price: 35
    }],
    [9,
    {
        Categories: ["Cactus", "Outdoot"],
        pName: 'Elephant ears',
        price: 35
    }]
];

function productFilter(criterias) //criterias là mảng categories
{
    if (criterias.length === 0) //Nếu criterias là mảng rỗng thì trả về toàn bộ sản phẩm
    {
        return productsList;
    }
    productsList = productsList.filter((item) =>
    {
        let check = false;
        item[1].Categories.forEach((cat) =>
        {
            if (check)
            {
                return;
            }
            if (criterias.includes(cat))
            {
                check = true;
            }
        });
        if (check)
        {
            return item;
        }
    });
    return productsList;
}
export default productFilter;
export {productsList};