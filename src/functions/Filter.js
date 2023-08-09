function productFilter(criterias) //criterias là mảng categories
{
    let productsList = [ //test mảng sản phẩm, thay bằng mảng thật import vào
        [1,
        {Categories: ["Indoor", "Succulent"]}],
        [2,
        {Categories: ["Outdoor", "Need light"]}],
        [3,
        {Categories: ["Medicine", "Succulent"]}],
        [4,
        {Categories: ["Apple", "Outdoor"]}],
        [5,
        {Categories: ["Cactus", "Outdoot"]}]
    ];
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