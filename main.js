const links_social_media = {
  youtube: '',
  twitter: '',
  facebook: '',
  github: 'rnndias',
  instagram: 'rennan.mnds'
}

function change_social_media_links() {
  // document.getElementById('user_name').textContent = 'Amanda'
  // user_name.textContent = 'Amanda'

  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}`

    // alert(li.children[0].href)
  }
}

change_social_media_links()

function get_github_user_info() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_photo.src = data.avatar_url
      user_github.href = data.html_url
      user_login.textContent = data.login
    })

  // alert(url)
}

get_github_user_info()
