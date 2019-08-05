
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../theme/components/Typography';
import TextField from '../theme/components/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    marginTop: theme.spacing(8)
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
  {
    code: 'es',
    name: 'Espanol', //this needs to have a spanish n
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
            <div className="fotter-div-1">
            <div className="fotter-div">
              <Grid item>Our Story</Grid>
              <Grid item>Get to know our team</Grid>
              <Grid item>Support Us</Grid>
              <Grid item className={classes.icons}>
                <a href="https://material-ui.com/" className={classes.icon}>
                  <img src="https://img.icons8.com/nolan/64/000000/facebook-circled.png" alt="Facebook"/>
                </a>
                <a href="https://twitter.com/MaterialUI" className={classes.icon}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0ZGJjZCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTE3LjcxMjUsMTguODEyNWMtMjAuNTcyODEsMCAtMzcuMzAyNSwxNi43Mjk2OSAtMzcuMzAyNSwzNy4zMDI1YzAsMS4yMzYyNSAwLjMwOTA2LDIuNDQ1NjMgMC40MywzLjY1NWMtMjUuNDM3MTksLTIuNDMyMTkgLTQ3LjkzMTU2LC0xNC42ODcxOSAtNjMuMjEsLTMzLjQzMjVjLTAuNzEyMTksLTAuOTAwMzEgLTEuODE0MDYsLTEuMzg0MDYgLTIuOTY5NjksLTEuMzAzNDRjLTEuMTQyMTksMC4wODA2MiAtMi4xNjM0NCwwLjczOTA2IC0yLjcyNzgxLDEuNzMzNDRjLTMuMjExNTYsNS41MjI4MSAtNS4wNTI1LDExLjg3ODc1IC01LjA1MjUsMTguNzA1YzAsOC4yNjQwNiAyLjk1NjI1LDE1LjgyOTM4IDcuNTI1LDIyLjAzNzVjLTAuODg2ODcsLTAuMzg5NjkgLTEuODU0MzcsLTAuNjA0NjkgLTIuNjg3NSwtMS4wNzVjLTEuMDYxNTYsLTAuNTY0MzcgLTIuMzM4MTIsLTAuNTM3NSAtMy4zNzI4MSwwLjA4MDYzYy0xLjAzNDY5LDAuNjE4MTIgLTEuNjY2MjUsMS43MzM0NCAtMS42Nzk2OSwyLjkyOTM3djAuNDNjMCwxMi42NzE1NiA2LjU1NzUsMjMuNjc2ODggMTYuMjMyNSwzMC40MjI1Yy0wLjEwNzUsLTAuMDEzNDQgLTAuMjE1LDAuMDI2ODggLTAuMzIyNSwwYy0xLjE4MjUsLTAuMjAxNTYgLTIuMzc4NDQsMC4yMTUgLTMuMTcxMjUsMS4xMTUzMWMtMC43OTI4MSwwLjkwMDMxIC0xLjA0ODEyLDIuMTUgLTAuNjk4NzUsMy4yOTIxOWMzLjg0MzEzLDExLjk0NTk0IDEzLjY1MjUsMjEuMDcgMjUuOCwyNC40MDI1Yy05LjY3NSw1Ljc1MTI1IC0yMC44OTUzMSw5LjEzNzUgLTMzLjAwMjUsOS4xMzc1Yy0yLjYyMDMxLDAgLTUuMTMzMTIsLTAuMTM0MzcgLTcuNjMyNSwtMC40M2MtMS42MTI1LC0wLjIxNSAtMy4xNTc4MSwwLjcyNTYzIC0zLjY5NTMxLDIuMjU3NWMtMC41NTA5NCwxLjUzMTg4IDAuMDUzNzUsMy4yMzg0NCAxLjQzNzgxLDQuMDg1YzE1LjUyMDMxLDkuOTU3MTkgMzMuOTQzMTMsMTUuODAyNSA1My43NSwxNS44MDI1YzMyLjEwMjE5LDAgNTcuMjg0MDYsLTEzLjQxMDYyIDc0LjE3NSwtMzIuNTcyNWMxNi44OTA5NCwtMTkuMTYxODcgMjUuNjkyNSwtNDQuMDQ4MTIgMjUuNjkyNSwtNjcuMjk1YzAsLTAuOTgwOTQgLTAuMDgwNjIsLTEuOTM1IC0wLjEwNzUsLTIuOTAyNWM2LjMwMjE5LC00LjgyNDA2IDExLjkzMjUsLTEwLjQ4MTI1IDE2LjM0LC0xNy4wOTI1YzAuODczNDQsLTEuMjc2NTYgMC43NzkzOCwtMi45ODMxMiAtMC4yMjg0NCwtNC4xNjU2MmMtMC45OTQzOCwtMS4xODI1IC0yLjY3NDA2LC0xLjU0NTMxIC00LjA3MTU2LC0wLjg4Njg4Yy0xLjc3Mzc1LDAuNzkyODEgLTMuODQzMTIsMC44NzM0NCAtNS42OTc1LDEuNTA1YzIuNDQ1NjMsLTMuMjY1MzEgNC41NDE4OCwtNi43ODU5NCA1LjgwNSwtMTAuNzVjMC40MywtMS4zNTcxOSAtMC4wNDAzMSwtMi44NDg3NSAtMS4xNTU2MiwtMy43MzU2MmMtMS-14xMTUzMSwtMC44NzM0NCAtMi42NzQwNiwtMC45ODA5NCAtMy44OTY4OCwtMC4yNDE4OGMtNS44NzIxOSwzLjQ4MDMxIC0xMi4zNzU5NCw1LjkyNTk0IC0xOS4yNDI1LDcuNDE3NWMtNi42NjUsLTYuMjM1IC0xNS40Mzk2OSwtMTAuNDI3NSAtMjUuMjYyNSwtMTAuNDI3NXpNMTE3LjcxMjUsMjUuNjkyNWM4Ljc3NDY5LDAgMTYuNzAyODEsMy43NDkwNiAyMi4yNTI1LDkuNjc1YzAuODMzMTMsMC44NiAyLjA1NTk0LDEuMjIyODEgMy4yMjUsMC45Njc1YzQuNDg4MTMsLTAuODg2ODcgOC43NDc4MSwtMi4xOTAzMSAxMi45LC0zLjg3Yy0yLjM5MTg3LDMuMjI1IC01LjM0ODEyLDUuOTc5NjkgLTguODE1LDguMDYyNWMtMS41NzIxOSwwLjc2NTk0IC0yLjMxMTI1LDIuNTggLTEuNzMzNDQsNC4yMzI4MWMwLjU2NDM3LDEuNjM5MzcgMi4yODQzNywyLjU5MzQ0IDMuOTkwOTQsMi4yMTcxOWMzLjQ0LC0wLjQxNjU2IDYuNTAzNzUsLTEuODE0MDYgOS43ODI1LC0yLjY4NzVjLTIuOTQyODEsMy4xODQ2OSAtNi4xNjc4MSw2LjA2MDMxIC05LjY3NSw4LjZjLTAuOTU0MDYsMC42OTg3NSAtMS40NzgxMiwxLjgyNzUgLTEuMzk3NSwzLjAxYzAuMDUzNzUsMS4zOTc1IDAuMTA3NSwyLjc4MTU2IDAuMTA3NSw0LjE5MjVjMCwyMS41IC04LjI1MDYyLDQ0Ljg0MDk0IC0yMy45NzI1LDYyLjY3MjVjLTE1LjcyMTg3LDE3LjgzMTU2IC0zOC44MDc1LDMwLjMxNSAtNjkuMDE1LDMwLjMxNWMtMTMuNzE5NjksMCAtMjYuNjczNDQsLTMuMDM2ODcgLTM4LjM3NzUsLTguMzg1YzE0LjUxMjUsLTEuMTE1MzEgMjcuODk2MjUsLTYuMjQ4NDQgMzguNywtMTQuNzI3NWMxLjEyODc1LC0wLjkwMDMxIDEuNTcyMTksLTIuNDA1MzEgMS4xMTUzMSwtMy43NzU5NGMtMC40NTY4OCwtMS4zNzA2MyAtMS43MiwtMi4zMTEyNSAtMy4xNTc4MSwtMi4zNTE1NmMtMTEuMzQxMjUsLTAuMjAxNTYgLTIwLjg0MTU2LC02Ljc5OTM3IC0yNS45MDc1LC0xNi4xMjVjMC4xODgxMywwIDAuMzQ5MzgsMCAwLjUzNzUsMGMzLjM5OTY5LDAgNi43NTkwNiwtMC40MyA5Ljg5LC0xLjI5YzEuNTA1LC0wLjQ0MzQ0IDIuNTM5NjksLTEuODQwOTQgMi40ODU5NCwtMy40MTMxMmMtMC4wNTM3NSwtMS41NzIxOSAtMS4xNjkwNiwtMi45MTU5NCAtMi43MDA5NCwtMy4yNTE4OGMtMTIuMjQxNTYsLTIuNDcyNSAtMjEuNDE5MzcsLTEyLjQ0MzEyIC0yMy41NDI1LC0yNC44MzI1YzMuNDY2ODgsMS4xOTU5NCA3LjAxNDM4LDIuMTM2NTYgMTAuODU3NSwyLjI1NzVjMS41NzIxOSwwLjA5NDA2IDIuOTk2NTYsLTAuODg2ODcgMy40ODAzMSwtMi4zNzg0NGMwLjQ4Mzc1LC0xLjQ5MTU2IC0wLjEwNzUsLTMuMTMwOTQgLTEuNDM3ODEsLTMuOTY0MDZjLTguMTcsLTUuNDY5MDYgLTEzLjU0NSwtMTQuNzgxMjUgLTEzLjU0NSwtMjUuMzdjMCwtMy45MjM3NSAxLjAyMTI1LC03LjUyNSAyLjM2NSwtMTAuOTY1YzE3LjIsMTguODc5NjkgNDEuMjgsMzEuNDE2ODggNjguNDc3NSwzMi43ODc1YzEuMDc1LDAuMDUzNzUgMi4xMjMxMywtMC4zODk2OSAyLjgyMTg4LC0xLjIwOTM3YzAuNjk4NzUsLTAuODMzMTMgMC45Njc1LC0xLjkzNSAwLjcyNTYyLC0yLjk4MzEzYy0wLjUyNDA2LC0yLjIzMDYyIC0wLjg2LC00LjU5NTYyIC0wLjg2LC02Ljk4NzVjMCwtMTYuODUwNjIgMTMuNTcxODgsLTMwLjQyMjUgMzAuNDIyNSwtMzAuNDIyNXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" />
                </a>
                <a href="#" className={classes.icon}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0
                  iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vb
                  mUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR
                  0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb
                  2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB
                  0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3M
                  nYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0OThkYiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMzQ
                  uOTM3NSwxNi4xMjVjLTEwLjM3MjA3LDAgLTE4LjgxMjUsOC40NDA0MyAtMTguODEyNSwxOC44MTI1djEwMi4xMjVjMCwxMC4zN
                  zIwNyA4LjQ0MDQzLDE4LjgxMjUgMTguODEyNSwxOC44MTI1aDEwMi4xMjVjMTAuMzcyMDcsMCAxOC44MTI1LC04LjQ0MDQzIDE
                  4LjgxMjUsLTE4LjgxMjV2LTEwMi4xMjVjMCwtMTAuMzcyMDcgLTguNDQwNDMsLTE4LjgxMjUgLTE4LjgxMjUsLTE4LjgxMjV6T
                  TM0LjkzNzUsMjEuNWgxMDIuMTI1YzcuNDExNjIsMCAxMy40Mzc1LDYuMDI1ODggMTMuNDM3NSwxMy40Mzc1djEwMi4xMjVjMCw
                  3LjQxMTYyIC02LjAyNTg4LDEzLjQzNzUgLTEzLjQzNzUsMTMuNDM3NWgtMTAyLjEyNWMtNy40MTE2MiwwIC0xMy40Mzc1LC02L
                  jAyNTg4IC0xMy40Mzc1LC0xMy40Mzc1di0xMDIuMTI1YzAsLTcuNDExNjIgNi4wMjU4OCwtMTMuNDM3NSAxMy40Mzc1LC0xMy4
                  0Mzc1ek0xMjksMzQuOTM3NWMtNC40NDA2NywwIC04LjA2MjUsMy42MjE4MyAtOC4wNjI1LDguMDYyNWMwLDQuNDQwNjcgMy42M
                  jE4Myw4LjA2MjUgOC4wNjI1LDguMDYyNWM0LjQ0MDY3LDAgOC4wNjI1LC0zLjYyMTgzIDguMDYyNSwtOC4wNjI1YzAsLTQuNDQ
                  wNjcgLTMuNjIxODMsLTguMDYyNSAtOC4wNjI1LC04LjA2MjV6TTEyOSwzOS4wNTI3M2MyLjE3MzEsMCAzLjk0NzI3LDEuNzc0M
                  TcgMy45NDcyNywzLjk0NzI3YzAsMi4xNzMxIC0xLjc3NDE3LDMuOTQ3MjcgLTMuOTQ3MjcsMy45NDcyN2MtMi4xNzMxLDAgLTM
                  uOTQ3MjcsLTEuNzc0MTcgLTMuOTQ3MjcsLTMuOTQ3MjdjMCwtMi4xNzMxIDEuNzc0MTcsLTMuOTQ3MjcgMy45NDcyNywtMy45N
                  DcyN3pNODYsNDguMzc1Yy0yMC43NDQxNCwwIC0zNy42MjUsMTYuODgwODYgLTM3LjYyNSwzNy42MjVjMCwyMC43NDQxNCAxNi4
                  4ODA4NiwzNy42MjUgMzcuNjI1LDM3LjYyNWMyMC43NDQxNCwwIDM3LjYyNSwtMTYuODgwODYgMzcuNjI1LC0zNy42MjVjMCwtM
                  jAuNzQ0MTQgLTE2Ljg4MDg2LC0zNy42MjUgLTM3LjYyNSwtMzcuNjI1ek04Niw1My43NWMxNy43ODM2OSwwIDMyLjI1LDE0LjQ
                  2NjMxIDMyLjI1LDMyLjI1YzAsMTcuNzgzNjkgLTE0LjQ2NjMxLDMyLjI1IC0zMi4yNSwzMi4yNWMtMTcuNzgzNjksMCAtMzIuM
                  jUsLTE0LjQ2NjMxIC0zMi4yNSwtMzIuMjVjMCwtMTcuNzgzNjkgMTQuNDY2MzEsLTMyLjI1IDMyLjI1LC0zMi4yNXpNODYsNTk
                  uMTI1Yy0xNC44MjMyNCwwIC0yNi44NzUsMTIuMDUxNzYgLTI2Ljg3NSwyNi44NzVjMCwxNC44MjMyNCAxMi4wNTE3NiwyNi44N
                  zUgMjYuODc1LDI2Ljg3NWMxNC44MjMyNCwwIDI2Ljg3NSwtMTIuMDUxNzYgMjYuODc1LC0yNi44NzVjMCwtMTQuODIzMjQgLTE
                  yLjA1MTc2LC0yNi44NzUgLTI2Ljg3NSwtMjYuODc1ek04Niw2NC41YzExLjg1MjI5LDAgMjEuNSw5LjY0NzcxIDIxLjUsMjEuN
                  WMwLDExLjg1MjI5IC05LjY0NzcxLDIxLjUgLTIxLjUsMjEuNWMtMTEuODUyMjksMCAtMjEuNSwtOS42NDc3MSAtMjEuNSwtMjE
                  uNWMwLC0xMS44NTIyOSA5LjY0NzcxLC0yMS41IDIxLjUsLTIxLjV6TTMyLjI1LDEzMS42ODc1Yy0xLjQ4MDIyLDAgLTIuNjg3N
                  SwxLjIwNzI4IC0yLjY4NzUsMi42ODc1djUuMzc1YzAsMS40ODAyMiAxLjIwNzI4LDIuNjg3NSAyLjY4NzUsMi42ODc1YzEuNDg
                  wMjIsMCAyLjY4NzUsLTEuMjA3MjggMi42ODc1LC0yLjY4NzV2LTUuMzc1YzAsLTEuNDgwMjIgLTEuMjA3MjgsLTIuNjg3NSAtM
                  i42ODc1LC0yLjY4NzV6TTQ1LjY4NzUsMTMxLjY4NzVjLTEuNDgwMjIsMCAtMi42ODc1LDEuMjA3MjggLTIuNjg3NSwyLjY4NzV
                  2NS4zNzVjMCwxLjQ4MDIyIDEuMjA3MjgsMi42ODc1IDIuNjg3NSwyLjY4NzVjMS40ODAyMiwwIDIuNjg3NSwtMS4yMDcyOCAyL
                  jY4NzUsLTIuNjg3NXYtNS4zNzVjMCwtMS40ODAyMiAtMS4yMDcyOCwtMi42ODc1IC0yLjY4NzUsLTIuNjg3NXpNNTkuMTI1LDE
                  zMS42ODc1Yy0xLjQ4MDIyLDAgLTIuNjg3NSwxLjIwNzI4IC0yLjY4NzUsMi42ODc1djUuMzc1YzAsMS40ODAyMiAxLjIwNzI4L
                  DIuNjg3NSAyLjY4NzUsMi42ODc1YzEuNDgwMjIsMCAyLjY4NzUsLTEuMjA3MjggMi42ODc1LC0yLjY4NzV2LTUuMzc1YzAsLTE
                  uNDgwMjIgLTEuMjA3MjgsLTIuNjg3NSAtMi42ODc1LC0yLjY4NzV6TTcyLjU2MjUsMTMxLjY4NzVjLTEuNDgwMjIsMCAtMi42O
                  Dc1LDEuMjA3MjggLTIuNjg3NSwyLjY4NzV2NS4zNzVjMCwxLjQ4MDIyIDEuMjA3MjgsMi42ODc1IDIuNjg3NSwyLjY4NzVjMS4
                  0ODAyMiwwIDIuNjg3NSwtMS4yMDcyOCAyLjY4NzUsLTIuNjg3NXYtNS4zNzVjMCwtMS40ODAyMiAtMS4yMDcyOCwtMi42ODc1I
                  C0yLjY4NzUsLTIuNjg3NXpNODYsMTMxLjY4NzVjLTEuNDgwMjIsMCAtMi42ODc1LDEuMjA3MjggLTIuNjg3NSwyLjY4NzV2NS4
                  zNzVjMCwxLjQ4MDIyIDEuMjA3MjgsMi42ODc1IDIuNjg3NSwyLjY4NzVjMS40ODAyMiwwIDIuNjg3NSwtMS4yMDcyOCAyLjY4N
                  zUsLTIuNjg3NXYtNS4zNzVjMCwtMS40ODAyMiAtMS4yMDcyOCwtMi42ODc1IC0yLjY4NzUsLTIuNjg3NXpNOTkuNDM3NSwxMzE
                  uNjg3NWMtMS40ODAyMiwwIC0yLjY4NzUsMS4yMDcyOCAtMi42ODc1LDIuNjg3NXY1LjM3NWMwLDEuNDgwMjIgMS4yMDcyOCwyL
                  jY4NzUgMi42ODc1LDIuNjg3NWMxLjQ4MDIyLDAgMi42ODc1LC0xLjIwNzI4IDIuNjg3NSwtMi42ODc1di01LjM3NWMwLC0xLjQ
                  4MDIyIC0xLjIwNzI4LC0yLjY4NzUgLTIuNjg3NSwtMi42ODc1ek0xMTIuODc1LDEzMS42ODc1Yy0xLjQ4MDIyLDAgLTIuNjg3N
                  SwxLjIwNzI4IC0yLjY4NzUsMi42ODc1djUuMzc1YzAsMS40ODAyMiAxLjIwNzI4LDIuNjg3NSAyLjY4NzUsMi42ODc1YzEuND
                  gwMjIsMCAyLjY4NzUsLTEuMjA3MjggMi42ODc1LC0yLjY4NzV2LTUuMzc1YzAsLTEuNDgwMjIgLTEuMjA3MjgsLTIuNjg3NSA
                  tMi42ODc1LC0yLjY4NzV6TTEyNi4zMTI1LDEzMS42ODc1Yy0xLjQ4MDIyLDAgLTIuNjg3NSwxLjIwNzI4IC0yLjY4NzUsMi42
                  ODc1djUuMzc1YzAsMS40ODAyMiAxLjIwNzI4LDIuNjg3NSAyLjY4NzUsMi42ODc1YzEuNDgwMjIsMCAyLjY4NzUsLTEuMjA3M
                  jggMi42ODc1LC0yLjY4NzV2LTUuMzc1YzAsLTEuNDgwMjIgLTEuMjA3MjgsLTIuNjg3NSAtMi42ODc1LC0yLjY4NzV6TTEzOS
                  43NSwxMzEuNjg3NWMtMS40ODAyMiwwIC0yLjY4NzUsMS4yMDcyOCAtMi42ODc1LDIuNjg3NXY1LjM3NWMwLDEuNDgwMjIgMS4
                  yMDcyOCwyLjY4NzUgMi42ODc1LDIuNjg3NWMxLjQ4MDIyLDAgMi42ODc1LC0xLjIwNzI4IDIuNjg3NSwtMi42ODc1di01LjM3
                  NWMwLC0xLjQ4MDIyIC0xLjIwNzI4LC0yLjY4NzUgLTIuNjg3NSwtMi42ODc1eiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnP
                  g==" />
                </a>
                <a href="#" className={classes.icon}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9IlBNV1VpTVNuVWYyUl9QUEo2cnFaZWEiIHgxPSIzMiIgeDI9IjMyIiB5MT0iMTAiIHkyPSI1NC43NTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzcHJlYWRNZXRob2Q9InJlZmxlY3QiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFhNmRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M4MjJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNQTVdVaU1TblVmMlJfUFBKNnJxWmVhKSIgZD0iTTMyLDUzLjAwMWMtNi4zNTgsMC0xMi43MTYtMC4xOTUtMTkuMjk5LTAuNTg0Yy00Ljk2LTAuMjkzLTguOTYxLTQuMjQyLTkuMzA4LTkuMTg3IGMtMC41MjEtNy40NTItMC41MjEtMTUuMDA5LTAuMDAxLTIyLjQ2YzAuMzQ4LTQuOTQ1LDQuMzQ5LTguODk1LDkuMzA5LTkuMTg4YzEzLjE2Ny0wLjc3OCwyNS40MzMtMC43NzgsMzguNTk4LDAgYzQuOTYsMC4yOTMsOC45NjEsNC4yNDIsOS4zMDgsOS4xODdjMC41MjEsNy40NTIsMC41MjEsMTUuMDA5LDAuMDAxLDIyLjQ2Yy0wLjM0OCw0Ljk0NS00LjM0OSw4Ljg5NS05LjMwOSw5LjE4OGwwLDAgQzQ0LjcxNiw1Mi44MDYsMzguMzU4LDUzLjAwMSwzMiw1My4wMDF6IE01MS4xODIsNTAuNDIxbDAuMDU5LDAuOTk4TDUxLjE4Miw1MC40MjFjMy45NT  </div>
        </div>ktMC4yMzQsNy4xNTMtMy4zODYsNy40MzEtNy4zMzEgYzAuNTE1LTcuMzU4LDAuNTE1LTE0LjgyMS0wLjAwMS0yMi4xODFjLTAuMjc2LTMuOTQ0LTMuNDcxLTcuMDk2LTcuNDMtNy4zM2MtMTMuMDg4LTAuNzczLTI1LjI3NS0wLjc3My0zOC4zNjMsMCBjLTMuOTU5LDAuMjM0LTcuMTUzLDMuMzg2LTcuNDMxLDcuMzMxYy0wLjUxNSw3LjM1OC0wLjUxNSwxNC44MjEsMC4wMDEsMjIuMTgxYzAuMjc2LDMuOTQ0LDMuNDcxLDcuMDk2LDcuNDMsNy4zMyBDMjUuOTA2LDUxLjE5NCwzOC4wOTQsNTEuMTk0LDUxLjE4Miw1MC40MjF6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJQTVdVaU1TblVmMlJfUFBKNnJxWmViIiB4MT0iMzEuNzIiIHgyPSIzMS43MiIgeTE9IjI0LjI1IiB5Mj0iMzkuMjUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZGM3ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNmFiZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjUE1XVWlNU25VZjJSX1BQSjZycVplYikiIGQ9Ik0yNSAzOS44NEwyNSAyNC4xNiAzOC40NCAzMnoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IlBNV1VpTVNuVWYyUl9QUEo2cnFaZWMiIHgxPSIzMi4yMTIiIHgyPSIzMi4yMTIiIHkxPSIxMCIgeTI9IjU0Ljc1MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1BNV1VpTVNuVWYyUl9QUEo2cnFaZWMpIiBkPSJNMjQsNDEuNTgxVjIyLjQxOUw0MC40MjUsMzJMMjQsNDEuNTgxeiBNMjYsMjUuOTAxdjEyLjE5N0wzNi40NTYsMzJMMjYsMjUuOTAxeiI+PC9wYXRoPjwvc3ZnPg==" />
                </a>
              </Grid>
              </div>
              </div>
            </Grid>
          </Grid>
          <div className="footer-div-1">
          <div className="footer-div">

            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>


            <Typography variant="caption">
              <Link href="" rel="" title="">
              </Link>
              <Link href="" rel="" title="">
              </Link>
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
            <Grid item>Copyright© 2019 The Freya Alliance | All Rights Reserved.</Grid>
              </div>
            </div>

        </Grid>
      </Container>
    </Typography>
  );
}
