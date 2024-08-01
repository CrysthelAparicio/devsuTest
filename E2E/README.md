# Test Automation with Selenium webdriver and Python

This project is a test automation solution using Selenium and Python. It allows to run functional tests in web browsers in an automated way.

## Requirements

Before you start, make sure you have the following installed:

- Python (versión 3.9.5 o superior)
- Visual Studio Code (recommended but not mandatory)

### Python installation
To verify if Python is installed on your system, you can run the following command in the console:

```bash
python --version
```

## Virtual Environment
It is recommended to use a virtual environment to install the project dependencies. For this purpose, the Python ``virtualenv` package must be installed:

```bash
pip install virtualenv
```

This allows you to isolate the installation of packages to a **project-specific** environment without altering the global system libraries or packages.

## Installation

1. Clone the repository on your local machine:

    `git clone https://github.com/CrysthelAparicio/devsuTest.git`

2. Navigate to the project directory:

    `cd E2E/`

3. Open the code with Visual Studio Code 
    
    `code .`

4. Open a new terminal and install the following

    Once `virtualenv` (Virtual Environment step) is installed, a virtual environment must be created in the project directory (in this case it will be named `venv`):

    ```bash
    python -m venv vdevsu
    ```

    To activate the virtual environment, the following command must be executed (this if we use `venv` as the name of the environment):

    ```bash
    ./vdevsu/Scripts/activate
    ```
     
    In the same terminal, define your workstation, with the following command:

    ```bash
    $env:PYTHONPATH="C:\YOUR_WORKSTATION\devsuTest\E2E"
    ```

5.  Install the following dependencies:  

    ```bash
    pip install -r requirements.txt
    ```

    In case you do not use the `requirements.txt` or `venv` file, run the following command to install the dependencies at **global** level of your system:

    ```bash
    pip install selenium==4.23.1
    pip install webdriver-manager==4.0.2
    pip install behave==1.2.6
    pip install allure-behave==2.13.5
    ```


## Execution

1. Run the tests using the following commands:

    ```bash
    $ behave ./Feature/
    $ behave ./Feature/Purchase/test_purchase.feature

    report with allure
    $ behave -f allure_behave.formatter:AllureFormatter -o allure-results ./Feature/

    show report
    $ allure serve allure-results
    ```
    
