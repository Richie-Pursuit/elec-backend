\c products_dev;


INSERT INTO products (name, description, price, top_speed, image) VALUES
('X-Class 52V Ebike', 'the ultimate choice for those who demand the best in performance.',2500, 35, 'https://images.app.goo.gl/UYEsvSARJ5vHzrxSA'), 
('EMOVE Cruiser 52V', 'The EMOVE Cruiser is built to ride long range, and travels up to 62 miles on a single charge.', 1400, 33, 'https://images.app.goo.gl/9RHtu4EbbbLk7mmk7'), 
('Backfire Zealot S Belt Drive', 'Glide the streets like the Silver Surfer', 700, 30, 'https://images.app.goo.gl/TYCQJV2vDJ98e1np7');



--run command: psql -U postgres -f db/seed.sql