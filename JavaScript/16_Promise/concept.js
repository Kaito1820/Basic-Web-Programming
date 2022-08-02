// new Number(1), new String('string'): object contructor
var promise = new Promise(
    //Executor (được gọi trước cả khi gán cho new Promise cho biến promise)
    function(resolve, reject){
        /*
        Logic
        Thành công -> resolve()
        Thất bại -> reject()
        */

        //Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript',
            }
        ]);
        // reject('There is an error!');
    }
);

/** Ba trạng thái của promise
 * 1. Pendding
 * 2. Fullfilled
 * 3. Rejected
 */

promise
    .then(function(course){
        //được gọi sau resolve()
        console.log(course);
    })
    .catch(function(error){
        // được gọi sau reject()
        console.log(error)
    })
    .finally(function(){
        // được gọi sau resolve() hoặc reject()
        console.log('Done!')
    })

//Note: Trả lời khi phỏng vấn
//Khái niệm promise: 
/**
 * 1. Promise sinh ra để xử lí các thao tác bất đồng bộ.
 * 
 * 2. Trước khi có Promise, chúng ta thường sử dụng callback.
 *    Và callback xảy ra vấn đề là callback hell, khiến việc code 
 *    khó nhìn, rối rắm, khó hiểu nên promise mới được sinh ra 
 *    từ phiên bản JS(es6) mới hơn giúp chúng ta ko bị cuốn vào 
 *    callback hell.
 * 
 * 3. Để tạo ra Promise đầu tiên dùng từ khóa new và Promise. Trong
 *    constructor của nó chúng ta sẽ truyền vào 1 ExecutorFunction.
 *    ExecutorFunction nhận vào 2 tham số dạng hàm: Resole và Reject.
 * 
 * 4. Resolve được gọi khi thao tác xử lí thành công và 
 *    Reject là ngược lại.
 * 
 * 5. Khi sử dụng Promise. Đối tượng promise được tạo ra. Chúng ta
 *    sử dụng các phương thức .then() hoặc .catch(). Cả 2 đều nhận
 *    callback function. then được khi thi khi promise được resolve,
 *    và sẽ lọt vài catch khi promise bị reject.
 */