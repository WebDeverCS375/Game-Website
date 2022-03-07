create table Items( 
    id INT AUTO_INCREMENT primary key, 
    name varchar(128) unique, 
    price FLOAT(2) not null, 
    quantity INT not null
    seller_id INT,
    unique(seller_id, name)
);