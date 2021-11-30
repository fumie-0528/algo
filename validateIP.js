// Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

// For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

function validateIP(ip) { 
    if (ip.indexOf('.') == -1){
      return false;
    }
    const arr = ip.split('.').map(Number);
    console.log(arr);
    if (arr.length != 4){
        return false;
        }
    for (let i=0;  i<arr.length; i++){
        if (0 <= arr[i] && arr[i] <= 255){
            continue;
        }else{
            return false;
        }
    }
    return true;
    }
console.log(validateIP("192.168.0.1"));
console.log(validateIP("19216801"));
console.log(validateIP("192.168.123.456"));
console.log(validateIP("192.168.123.22.234"));
console.log(validateIP("12.34.56.oops"));