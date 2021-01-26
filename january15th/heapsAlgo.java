public String permutationTest(String str) {
    if(str.length == 0) return '';
    System.out.println(str.charAt(0) + permutationTest(str.substring(str.charAt(1))));
    return perm
} 