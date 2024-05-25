// add yarn :npm install --global yarn

//Error
// yarn : File C:\Users\Saurabh\AppData\Roaming\npm\yarn.ps1 cannot be loaded because running scripts is disabled on 
// this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
// At line:1 char:1
// + yarn android
// + ~~~~
//     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
//     + FullyQualifiedErrorId : UnauthorizedAccess

//Solution::
// run this command on powershell as a administrator:
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted