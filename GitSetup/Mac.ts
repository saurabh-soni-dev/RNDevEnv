// Git & Github

// Clone:
// 1. git config --global credential.helper osxkeychain (optional)
// 2. From specific branch:: git clone --branch <branchname> <remote-repo-url> / git clone -b <branchname> <remote-repo-url>
// 3. Add user name::
// 4. Add pass:: go git settings -> developer settings -> PAT -> tokens(classic) -> generate new token -> enter generated token here (show on keychain access when we push code once)

// Delete All the keychain Pass:
// $ git credential-osxkeychain erase host=github.com protocol=https
// > [Press Return]