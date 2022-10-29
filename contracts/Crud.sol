//SPDX-License-Identifier: Unilicense
pragma solidity ^0.8.0;

contract Crud {
    //Creating structure of an employee
    struct Employee {
        string id;
        string name;
        string email;
        uint8 age;
        address walletAddress;
    }

    //Storing the employees in an array of Employee type
    Employee[] public employees;

    //Storing the total employees
    uint256 public totalEmployees;

    /*
     @title A function to create an employee and store it into the employees array
     @author Suman Chakraborty
     @param _name: The name of the employee
     @param _email: The email of the employee
     @param _age: The age of the employee
     @param _walletAddress: The Wallet address of the employee
     */
    function createEmp(
        string memory _id,
        string memory _name,
        string memory _email,
        uint8 _age,
        address _walletAddress
    ) external {
        Employee memory employee = Employee(
            _id,
            _name,
            _email,
            _age,
            _walletAddress
        );
        employees.push(employee);
        totalEmployees++;
    }

    function compareStrings(string memory _a, string memory _b)
        internal
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b));
    }

    function updateEmp(
        string memory _id,
        string memory _name,
        string memory _email,
        uint8 _age,
        address _walletAddress
    ) external returns (bool) {
        for (uint256 i = 0; i < totalEmployees; i++) {
            if (compareStrings(employees[i].id, _id)) {
                employees[i].name = _name;
                employees[i].email = _email;
                employees[i].age = _age;
                employees[i].walletAddress = _walletAddress;

                return true;
            }
        }

        return false;
    }

    function deleteEmp(string memory _id) external returns (uint256){
        for (uint256 i = 0; i < totalEmployees; i++) {
            if (compareStrings(employees[i].id, _id)) {
                delete employees[i];
                return i;
                
            }
        }
    }
}
