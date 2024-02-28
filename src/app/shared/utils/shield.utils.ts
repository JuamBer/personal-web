export const generateTechnologyShield = (technology: string) => {
  // example shield: https://img.shields.io/badge/html5-%23ED8B00.svg?style=for-the-badge&logo=html5&logoColor=white

  let logo = technology;
  let name = technology;

  if (technology === 'github-pages') {
    logo = 'github';
    name = 'github pages';
  } else if (technology === 'rxjs') {
    logo = 'reactivex';
  } else if (technology === 'githubactions') {
    name = 'github actions';
  } else if (technology === 'aws') {
    logo = 'amazonaws';
    name = 'amazon aws';
  } else if (technology === 'java') {
    logo =
      'data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwLDAsMjU2LDI1NiIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNMjguMTg3NSwwYzIuNzUsNi4zNjMyOCAtOS44NTkzNywxMC4yOTI5NyAtMTEuMDMxMjUsMTUuNTkzNzVjLTEuMDc0MjIsNC44NzEwOSA3LjQ5MjE5LDEwLjUzMTI1IDcuNSwxMC41MzEyNWMtMS4zMDA3OCwtMi4wMTU2MiAtMi4yNTc4MSwtMy42NzU3OCAtMy41NjI1LC02LjgxMjVjLTIuMjA3MDMsLTUuMzA0NjkgMTMuNDQxNDEsLTEwLjEwNTQ3IDcuMDkzNzUsLTE5LjMxMjV6TTM2LjU2MjUsOC44MTI1YzAsMCAtMTEuMDYyNSwwLjcxMDk0IC0xMS42MjUsNy43ODEyNWMtMC4yNSwzLjE0ODQ0IDIuOTEwMTYsNC44MDQ2OSAzLDcuMDkzNzVjMC4wNzQyMiwxLjg3MTA5IC0xLjg3NSwzLjQzNzUgLTEuODc1LDMuNDM3NWMwLDAgMy41NDY4OCwtMC42NzU3OCA0LjY1NjI1LC0zLjUzMTI1YzEuMjMwNDcsLTMuMTY3OTcgLTIuMzk4NDQsLTUuMzA4NTkgLTIuMDMxMjUsLTcuODQzNzVjMC4zNTE1NiwtMi40MjU3OCA3Ljg3NSwtNi45Mzc1IDcuODc1LC02LjkzNzV6TTE5LjE4NzUsMjUuMTU2MjVjMCwwIC0xMC4xMjUsLTAuMTQ0NTMgLTEwLjEyNSwyLjcxODc1YzAsMi45OTIxOSAxMy4yNTM5MSwzLjIxNDg0IDIyLjcxODc1LDEuMzc1YzAsMCAyLjUxNTYzLC0xLjczMDQ3IDMuMTg3NSwtMi4zNzVjLTYuMjAzMTIsMS4yNjU2MyAtMjAuMzQzNzUsMS40MDYyNSAtMjAuMzQzNzUsMC4zMTI1YzAsLTEuMDA3ODEgNC41NjI1LC0yLjAzMTI1IDQuNTYyNSwtMi4wMzEyNXpNMzguNjU2MjUsMjUuMTU2MjVjLTAuOTkyMTksMC4wNzgxMyAtMi4wNjI1LDAuNDYwOTQgLTMuMDMxMjUsMS4xNTYyNWMyLjI4MTI1LC0wLjQ5MjE5IDQuMjE4NzUsMC45MjE4OCA0LjIxODc1LDIuNTMxMjVjMCwzLjYyNSAtNS4yNSw3LjAzMTI1IC01LjI1LDcuMDMxMjVjMCwwIDguMTI1LC0wLjkyMTg3IDguMTI1LC02Ljg3NWMwLC0yLjcwMzEyIC0xLjg3ODkxLC00LjAxNTYyIC00LjA2MjUsLTMuODQzNzV6TTE2Ljc1LDMwLjcxODc1Yy0xLjU1NDY5LDAgLTMuODc1LDEuMjE4NzUgLTMuODc1LDIuMzc1YzAsMi4zMjQyMiAxMS42ODc1LDQuMTEzMjggMjAuMzQzNzUsMC43MTg3NWwtMywtMS44NDM3NWMtNS44NjcxOSwxLjg3ODkxIC0xNi42NzE4NywxLjI2NTYzIC0xMy40Njg3NSwtMS4yNXpNMTguMTg3NSwzNS45Mzc1Yy0yLjEyODkxLDAgLTMuNTMxMjUsMS4yODUxNiAtMy41MzEyNSwyLjI1YzAsMi45ODQzOCAxMi43MTQ4NCwzLjI4NTE2IDE3Ljc1LDAuMjVsLTMuMTg3NSwtMi4wMzEyNWMtMy43NjE3MiwxLjU4OTg0IC0xMy4yMDMxMiwxLjgzMjAzIC0xMS4wMzEyNSwtMC40Njg3NXpNMTEuMDkzNzUsMzguNjI1Yy0zLjQ2ODc1LC0wLjA3MDMxIC01LjcxODc1LDEuNDg4MjggLTUuNzE4NzUsMi43ODEyNWMwLDYuODc1IDM1LjUsNi41NTg1OSAzNS41LC0wLjQ2ODc1YzAsLTEuMTY3OTcgLTEuMzQ3NjYsLTEuNzM0MzcgLTEuODQzNzUsLTJjMi45MDIzNCw2LjcxODc1IC0yOS4wNjI1LDYuMTgzNTkgLTI5LjA2MjUsMi4yMTg3NWMwLC0wLjkwMjM0IDIuMzUxNTYsLTEuNzY1NjIgNC41MzEyNSwtMS4zNDM3NWwtMS44NDM3NSwtMS4wNjI1Yy0wLjU0Mjk3LC0wLjA4MjAzIC0xLjA2NjQxLC0wLjExMzI4IC0xLjU2MjUsLTAuMTI1ek00NC42MjUsNDMuMjVjLTUuMzk4NDQsNS4xMTcxOSAtMTkuMDc4MTIsNi45NzI2NiAtMzIuODQzNzUsMy44MTI1YzEzLjc2MTcyLDUuNjMyODEgMzIuNzc3MzQsMi40NzI2NiAzMi44NDM3NSwtMy44MTI1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+';
  }

  let color = 'ED8B00';
  let logoColor = 'white';

  switch (technology) {
    case 'angular':
      color = 'DD0031';
      logoColor = 'white';
      break;
    case 'react':
      color = '61DAFB';
      logoColor = 'black';
      break;
    case 'vue':
      color = '4FC08D';
      logoColor = 'white';
      break;
    case 'github-pages':
      color = '181717';
      logoColor = 'white';
      break;
    case 'html5':
      color = 'E34F26';
      logoColor = 'white';
      break;
    case 'css3':
      color = '1572B6';
      logoColor = 'white';
      break;
    case 'sass':
      color = 'CC6699';
      logoColor = 'white';
      break;
    case 'less':
      color = '1D365D';
      logoColor = 'white';
      break;
    case 'java':
      color = 'd4674a';
      logoColor = 'white';
      break;
    case 'javascript':
      color = 'F7DF1E';
      logoColor = 'black';
      break;
    case 'typescript':
      color = '3178C6';
      logoColor = 'white';
      break;
    case 'node.js':
      color = '339933';
      logoColor = 'white';
      break;
    case 'express':
      color = '000000';
      logoColor = 'white';
      break;
    case 'nestjs':
      color = 'E0234E';
      logoColor = 'white';
      break;
    case 'next.js':
      color = '000000';
      logoColor = 'white';
      break;
    case 'postgresql':
      color = '336791';
      logoColor = 'white';
      break;
    case 'mongodb':
      color = '47A248';
      logoColor = 'white';
      break;
    case 'mysql':
      color = '4479A1';
      logoColor = 'white';
      break;
    case 'sqlite':
      color = '003B57';
      logoColor = 'white';
      break;
    case 'springboot':
      color = '6DB33F';
      logoColor = 'white';
      break;
    case 'mapbox':
      color = '000000';
      logoColor = 'white';
      break;
    case 'ngrx':
      color = 'a829c3';
      logoColor = 'white';
      break;
    case 'rxjs':
      color = 'c2185b';
      logoColor = 'white';
      break;
    case 'primeng':
      color = '007E8A';
      logoColor = 'white';
      break;
    case 'gitlab':
      color = 'FCA326';
      logoColor = 'white';
      break;
    case 'docker':
      color = '2496ED';
      logoColor = 'white';
      break;
    case 'kubernetes':
      color = '326CE5';
      logoColor = 'white';
      break;
    case 'git':
      color = 'F05032';
      logoColor = 'white';
      break;
    case 'jenkins':
      color = '212529';
      logoColor = 'white';
      break;
    case 'prettier':
      color = 'F7B93E';
      logoColor = 'black';
      break;
    case 'eslint':
      color = '4B32C3';
      logoColor = 'white';
      break;
    case 'githubactions':
      color = '181717';
      logoColor = 'white';
      break;
    case 'supabase':
      color = '37996bcc';
      logoColor = 'white';
      break;
    case 'swagger':
      color = '38b832';
      logoColor = 'white';
      break;
  }

  return `https://img.shields.io/badge/${name}-%23${color}.svg?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
};
