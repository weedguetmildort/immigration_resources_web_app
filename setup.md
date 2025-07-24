# Downloading Project: Powershell Visual Studio Code

```shell
git clone https://github.com/weedguetmildort/overreliance_testing_platform.git
pip install -r requirements.txt
```

# Installing Manual Process: Powershell VS Code

To get started you will need to install all the dependencies using the Python package manager, pip.

Please ensure you have Python and pip installed on your system. If you haven't installed them yet, you can find Python installation instructions [here](https://www.python.org/downloads/) and pip installation instructions [here](https://pip.pypa.io/en/stable/installation/).

Once Python and pip are installed, you can create virtual environment in which the project dependencies will be installed.

Now you are ready to create and activate the python virtual environment by running the following command in your terminal or command prompt

```shell
python -m venv .<virtual_environment_name>
.<virtual_environment_name>\Scripts\activate
```

This command will download and install the latest required dependencies for the python virtual environment.

```shell
pip install requirements.txt
```

Now you are ready to create and activate the node virtual environment by running the following command in your terminal or command prompt

```shell
nodeenv .<virtual_environment_name>
deactivate
```

Moving forward this should be the only required virtual environment, which can be activated by using:

```shell
.<node_virtual_environment_name>\Scripts\activate
```

Now to install all node dependencies, use the following commands:

```shell
cd my-app
npm install
```

Now to run the webapp, use the following commands:

```shell
npm start
```