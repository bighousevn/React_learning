1 mocks: test api 
2 app : -assets: ảnh
        -components: common react component(componet chung template) 
        -hooks: custom hooks
        -layouts: layout của trang
        -locales: file translate
        -models: quản lí model,class chung(user, authentication)
        -modules: chứa thư viện (tự làm hoặc kế thừa), owner cả thư viện(src,...)
        -pages: page (home,product,..)
                -Home: 
                        -models: 
                        -partials: 
                        -schemas: kiểm tra tính hợp lệ của form
                        -service: call, xử lí,... api
                        -usecases: src xử lí phức tạp của components
                        -componets: home.js
                        -style: home.css
        -routes: route
        -styles: css, bootstrap
