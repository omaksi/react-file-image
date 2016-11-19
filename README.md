# react-file-image
A minimalistic React img component accepting File objects

Useful when showing images directly from a `<input type="file" />`

## Installation
```sh
npm install react-file-image
```

## Props
Only the `file` Prop is required, it must be a File object

## Usage

```js
handleFileInputChange = (e) => {
  const file = e.target.files[0];
}

<FileImage width="300" height="200" file={file} />
```

## License
MIT
