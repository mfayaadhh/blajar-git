/**
 * Buatlah sebuah fungsi yang akan mencocokan requirement dari sebuah perusahaan dengan skill yang dimiliki oleh seseorang.
 * Fungsi ini akan menerima dua parameter yang berupa object.
 *
 * Parameter pertama adalah sebuah object perusahaan dengan beberapa data berikut: nama perusahaan, job yang ditawarkan dan requirement yang dibutuhkan untuk mendapatkan pekerjaan.
 * Parameter kedua adalah sebuah object pelamar dengan beberapa data berikut: nama pelamar, skill pelamar dan job yang dinginkan oleh pelamar tersebut.
 *
 * Fungsi ini akan menghitung persentase kecocokan perusahaan dan pelamar yang dikirimkan dengan beberapa syarat:
 *   1. Jika job yang ditawarkan oleh perusahaan tidak sesuai dengan job yang diinginkan maka persentase mereka adalah 0%.
 *   2. Jika seluruh requirement yang diminta oleh perusahaan dipenuhi oleh pelamar maka persentase mereka adalah 100%.
 *   3. Jika ada beberapa requirement yang tidak dipenuhi pelamar maka persentase akan dihitung dengan rumus:
 *        (jumlah requirement yang dipenuhi) / (requirement yang diminta)
 *      Contoh: Terdapat 3 requirement pada perusahan tetapi pelamar hanya memenuhi 2 requirement.
 *              Maka dari itu persentase pelamar tersebut adalah 66% (pembulatan ke bawah).
 *
 * Jika seseorang mendapatkan persentase diatas 60% maka fungsi akan menghasilkan pesan:
 *   Selamat [nama pelamar], Anda cocok dengan perusahaan [nama perusahaan] dengan persentase kecocokan [persentase]%.
 * Jika tidak, maka fungsi akan menghasilkan pesan:
 *   Mohon maaf [nama pelamar], Anda belum cocok dengan perusaahan [nama perusahaan]. Anda hanya mendapatkan persentase kecocokan [persentase]%.
 */

function companyMatch(company, user) {
    // Your code here
    let persentase = 0;
    let count = 0;

    if(user.applyAs !== company.job) {
        return `Mohon maaf ${user.name}, Anda belum cocok dengan perusaahan ${company.name}. Anda hanya mendapatkan persentase kecocokan ${persentase}%.`
    } else {
        let userSkills = user.skills;
        let requirements = company.requirement;
        
        for(let i = 0; i < userSkills.length; i++) {
            for(let j = 0; j < requirements.length; j++) {
                if(userSkills[i] === requirements[j]) {
                    count++;
                }
            }
        }
        persentase = Math.floor((count / 3) * 100);
        return `Selamat ${user.name}, Anda cocok dengan perusahaan ${company.name} dengan persentase kecocokan ${persentase}%.`
    }
}
  
const company1 = {
name: 'Pesbok',
job: 'Frontend Developer',
requirement: ['HTML', 'CSS', 'JS']
};

const john = {
name: 'John',
applyAs: 'Frontend Developer',
skills: ['HTML', 'CSS', 'JS']
};

const kosasih = {
name: 'Kosasih',
applyAs: 'Backend Developer',
skills: ['Express', 'Node', 'PHP']
};

const marry = {
name: 'Marry',
applyAs: 'Frontend Developer',
skills: ['HTML', 'CSS']
};

console.log(companyMatch(company1, john)); // Selamat John, Anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 100%.
console.log(companyMatch(company1, kosasih)); // Mohon maaf Kosasih, Anda belum cocok dengan perusaahan Pesbok. Anda hanya mendapatkan persentase kecocokan 0%.
console.log(companyMatch(company1, marry)); // Selamat Marry Anda cocok dengan perusahaan Pesbok dengan persentase kecocokan 66%.