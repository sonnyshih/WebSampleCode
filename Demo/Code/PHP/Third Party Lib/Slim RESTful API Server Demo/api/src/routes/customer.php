<?php
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    
    $app = new \Slim\App;
    
    // Get All customers
    $app->get('/api/customers', function (Request $request, Response $response, array $args) {
        
       $sql = "SELECT * FROM customer";
    
       try{
            // Get DB Object
            $db = new db();
            $db = $db->connection();
            
            $stmt = $db->query($sql);
            $customers = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            
            echo json_encode($customers);
            
    
       } catch(PDOException $e) {
            echo "{'error':{'text':'". $e->getMessage() ."'}";
       }
    
    });
    
    
    // Get Single Customer
    $app->get('/api/customer/{id}', function (Request $request, Response $response, array $args) {
        
        $id = $args['id'];
        // 也可以寫成 $id = $request->getAttribute('id');
        
        $sql = "SELECT * FROM customer where ID='". $id ."'";
        
        try{
            // Get DB Object
            $db = new db();
            $db = $db->connection();
            
            $stmt = $db->query($sql);
            $customer = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            
            echo json_encode($customer);
            
            
        } catch(PDOException $e) {
            echo "{'error':{'text':'". $e->getMessage() ."'}";
        }
        
    });


    // Add Customer
    $app->post('/api/customer/add', function (Request $request, Response $response, array $args) {
        
        $account = $args['Account'];
        $name = $args['Name'];
        $password = $args['Password'];
        $email = $args['Email'];
        // 也可以寫成
//         $account = $request->getParam('Account');
//         $name = $request->getParam('Name');
//         $password = $request->getParam('Password');
//         $email = $request->getParam('Email');
        
        $sql = "INSERT INTO customer(Account, Name, Password, Email) 
                VALUES(:Account, :Name, :Password, :Email)";
        
        try{
            // Get DB Object
            $db = new db();
            $db = $db->connection();
            
            $stmt = $db->prepare($sql);
            $stmt->bindParam(":Account", $account);
            $stmt->bindParam(":Name", $name);
            $stmt->bindParam(":Password", $password);
            $stmt->bindParam(":Email", $email);
            
            $stmt->execute();
            
            $db = null;
            
            echo "{'notice':{'text':'Customer Added'}}";
            
        } catch(PDOException $e) {
            echo "{'error':{'text':'". $e->getMessage() ."'}";
        }
        
    });
    
    // Update Customer
    $app->put('/api/customer/update/{id}', function (Request $request, Response $response, array $args) {
        
        $id = $args['id'];
        // 也可以寫成 $id = $request->getAttribute('id');

        // 只能寫成這樣，不能使用$args['Account']，會取不到值
        $account = $request->getParam('Account');
        
        $sql = "UPDATE customer SET 
                 Account = :Account, 
                    Name = :Name, 
                Password = :Password, 
                   Email = :Email 
                WHERE ID = '". $id ."'";
        
        try{
            // Get DB Object
            $db = new db();
            $db = $db->connection();
            
            $stmt = $db->prepare($sql);
            $stmt->bindParam(":Account", $account);
            $stmt->bindParam(":Name", $name);
            $stmt->bindParam(":Password", $password);
            $stmt->bindParam(":Email", $email);
            
            $stmt->execute();
            
            $db = null;
            
            echo "{'notice':{'text':'Customer Updated'}}";
            
        } catch(PDOException $e) {
            echo "{'error':{'text':'". $e->getMessage() ."'}";
        }
        
    });
    

    // Delete Customer
    $app->delete('/api/customer/delete/{id}', function (Request $request, Response $response, array $args) {
        
        $id = $args['id'];
        // 也可以寫成 $id = $request->getAttribute('id');
        
        $sql = "DELETE FROM customer where ID='". $id ."'";
        
        try{
            // Get DB Object
            $db = new db();
            $db = $db->connection();
            
            $stmt = $db->prepare($sql);
            $stmt->execute();
            
            $db = null;
            
            echo "{'notice':{'text':'Customer Deleted'}}";
            
            
        } catch(PDOException $e) {
            echo "{'error':{'text':'". $e->getMessage() ."'}";
        }
        
    });
            
            

?>