function check_passwd(username, passwd) { 
    if (passwd < 8) {
        print('Короткий');
        return true;
    }
    return false;
}
console.log(check_passwd());