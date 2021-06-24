window.BENCHMARK_DATA = {
  "lastUpdate": 1624544792822,
  "repoUrl": "https://github.com/danielorihuela/SyMPC",
  "entries": {
    "Pytest-benchmarks": [
      {
        "commit": {
          "author": {
            "email": "anubhavraj.08@gmail.com",
            "name": "Anubhav Raj Singh",
            "username": "aanurraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7561dec407b230767b9dc517553ea77481d891e9",
          "message": "added support to generate primitives from log (#127)\n\n* added support to generate primitives from log\r\n\r\n* added tests and add get on store\r\n\r\n* fixed copy\r\n\r\n* modified logging kwargs\r\n\r\n* code imporved in generate_primitive_from_dict\r\n\r\n* more asserts to tests\r\n\r\nCo-authored-by: George-Cristian Muraru <murarugeorgec@gmail.com>",
          "timestamp": "2021-04-28T19:16:54+01:00",
          "tree_id": "ba4c5e6451063185fe6166723b86d5184787ef08",
          "url": "https://github.com/danielorihuela/SyMPC/commit/7561dec407b230767b9dc517553ea77481d891e9"
        },
        "date": 1619640169257,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.2652830397353285,
            "unit": "iter/sec",
            "range": "stddev: 0.1016945041891978",
            "extra": "mean: 3.7695587362000027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danielorihuela@users.noreply.github.com",
            "name": "danielorihuela",
            "username": "danielorihuela"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "728b978651d5a6bbeb75bdb83dee0ad5e73fd957",
          "message": "Style/flake8 configuration (#132)\n\n* refactor: all flake8 configuration in one place\r\n\r\nWe copied the flake8 configuration of pysyft\r\nand added some options.\r\n\r\nAdded:\r\n\r\n- F401 since in Pysyft you can find a lot of\r\n`# noqa 401` through the code.\r\n- DAR101 and DAR201 to ignore only on tests.\r\n  Seems fair, since arguments and returns should be already commented on\r\n  the source code.\r\n  Also, it could clatter the code explaining fixtures.\r\n- Exclude rst, txt, md files and the setup.cfg, since they are not\r\nsource code.\r\n\r\n* fix: flake8 warnings\r\n\r\n* chore: typo\r\n\r\n* fix: style warnings\r\n\r\n* chore: remove _ on methods returning single value\r\n\r\n* chore: update black line length option",
          "timestamp": "2021-05-01T14:19:24+01:00",
          "tree_id": "06aa261ccb6ef35eb114fbf5b6b76ebb3aca971a",
          "url": "https://github.com/danielorihuela/SyMPC/commit/728b978651d5a6bbeb75bdb83dee0ad5e73fd957"
        },
        "date": 1619877504391,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.2545862793568763,
            "unit": "iter/sec",
            "range": "stddev: 0.12491164657058515",
            "extra": "mean: 3.927941452800019 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamathhrishi@gmail.com",
            "name": "Hrishikesh Kamath",
            "username": "kamathhrishi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95e351db48172fd2df0d89383a3023cb747306da",
          "message": "Separate tests for exceptions  (#122)\n\n* Initialize exeception tests\r\n\r\n* Add no session exception test\r\n\r\n* Run precommit hook\r\n\r\n* Test to ensure exception is thrown for invalid protocol\r\n\r\n* Test exception for div on MPC Tensor\r\n\r\n* precommit hook\r\n\r\n* Add accidental function call in tests\r\n\r\n* Precoommit hook\r\n\r\n* Add exception test for conv2d kernel mismatch\r\n\r\n* Rename test functions\r\n\r\n* Test exception for invalid op\r\n\r\n* Add test for exception for dividing sharetensor with float\r\n\r\n* Add exception test for invalid ring size\r\n\r\n* Add exception test for unsupported operation on FSS\r\n\r\n* Add exception for Insufficient FSS primitives\r\n\r\n* modify div with float exception test to use get_clients functioon\r\n\r\n* Exception tests use get_primitive()\r\n\r\n* Ran precommit\r\n\r\n* Precommit hook\r\n\r\n* Modify div_float exception test to remove redundant step\r\n\r\n* Modify test name to setup_mpc\r\n\r\n* Removed redundant test\r\n\r\n* Remove redundant statements in test_mpc_share_nosession_exception and remove uncessary get_clients()\r\n\r\n* Change variable name in no session exception test\r\n\r\n* Modify test name and remove unused parameters\r\n\r\n* Rechange function name\r\n\r\n* Ran precommit hook\r\n\r\n* Remove unused variables",
          "timestamp": "2021-05-03T10:32:03+01:00",
          "tree_id": "5336ac70feaa912c55504e156540bc2a9505395a",
          "url": "https://github.com/danielorihuela/SyMPC/commit/95e351db48172fd2df0d89383a3023cb747306da"
        },
        "date": 1620064678358,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.26012313607879783,
            "unit": "iter/sec",
            "range": "stddev: 0.13173060105066514",
            "extra": "mean: 3.8443331688000058 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "16245436+jmaunon@users.noreply.github.com",
            "name": "jmaunon",
            "username": "jmaunon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c47d1cb4ace446de0a295e1b8ddab1041f9d7c91",
          "message": "Add auto-flake (#139)\n\n* Add auto-flake\r\n\r\n* Add --recursive and update GA test\r\n\r\n* Add foo file that will be deleted after testing\r\n\r\n* Delete foo.py\r\n\r\n* Add all-unused-imports\r\n\r\nCo-authored-by: George-Cristian Muraru <murarugeorgec@gmail.com>",
          "timestamp": "2021-05-03T19:39:42+01:00",
          "tree_id": "4365619d6123f75727e1b3db503427c0edd4d833",
          "url": "https://github.com/danielorihuela/SyMPC/commit/c47d1cb4ace446de0a295e1b8ddab1041f9d7c91"
        },
        "date": 1620148064930,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.2447269633081519,
            "unit": "iter/sec",
            "range": "stddev: 0.1744069647497607",
            "extra": "mean: 4.0861864441999955 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anubhavraj.08@gmail.com",
            "name": "Anubhav Raj Singh",
            "username": "aanurraj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b333154dfbdfd56063e7807cda4506acd8aa76e",
          "message": "support to use pre generated primitives (#141)\n\n* added conditional genration for generating primitive\r\n\r\n* fixes\r\n\r\n* fixed except block\r\n\r\n* added custom exceptions\r\n\r\n* added tests\r\n\r\n* moved exception file\r\n\r\n* more specific exceptions\r\n\r\n* parameterized tests",
          "timestamp": "2021-05-06T19:19:00+01:00",
          "tree_id": "57af9b4c8e561abc3d99269521abec5d316fcc33",
          "url": "https://github.com/danielorihuela/SyMPC/commit/4b333154dfbdfd56063e7807cda4506acd8aa76e"
        },
        "date": 1620331886179,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.2520001224264982,
            "unit": "iter/sec",
            "range": "stddev: 0.21275278084912008",
            "extra": "mean: 3.9682520403999946 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kamathhrishi@gmail.com",
            "name": "Hrishikesh Kamath",
            "username": "kamathhrishi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16264701b3ee6787cf40edd0ffeeda4c589035ad",
          "message": "Sort list of MPC Tensors (#140)\n\n* Initiate sorting list of MPC Tensors\r\n\r\n* Precommit hook\r\n\r\n* Rename test file\r\n\r\n* Add documentation and type annotations\r\n\r\n* Modify documentation\r\n\r\n* Modify doc strring in __init__\r\n\r\n* Rename sort function\r\n\r\n* Update __init__.py\r\n\r\n* Update __init__.py\r\n\r\n* Raise ValueError due to invalid list size and  test for exception\r\n\r\n* Raise ValueError due to invalid list size and  test for exception\r\n\r\n* Added secure implementation of bubblesort\r\n\r\n* Change name from applications to algorithms\r\n\r\n* Fix tests\r\n\r\n* Style  changes\r\n\r\n* Remove applications folder and fix darlint issue\r\n\r\n* Modified docstring\r\n\r\n* Renamed files\r\n\r\n* Parameterized pytest test and small style changes\r\n\r\n* Remove unnecessary new lines\r\n\r\n* save 1-check to improve performance\r\n\r\n* Precommit hook\r\n\r\nCo-authored-by: George-Cristian Muraru <murarugeorgec@gmail.com>",
          "timestamp": "2021-05-09T21:15:54+01:00",
          "tree_id": "f48bb505332be7275f8a38dff5f361d25320be36",
          "url": "https://github.com/danielorihuela/SyMPC/commit/16264701b3ee6787cf40edd0ffeeda4c589035ad"
        },
        "date": 1620682335597,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.2344700065065904,
            "unit": "iter/sec",
            "range": "stddev: 0.10261020653881152",
            "extra": "mean: 4.264937826800002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "murarugeorgec@gmail.com",
            "name": "George-Cristian Muraru",
            "username": "gmuraru"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63cf891cd91634b4c049dea12d9c28eece7d60ad",
          "message": "Add training POC (#161)",
          "timestamp": "2021-05-18T00:22:21+01:00",
          "tree_id": "ca5e3198b99a3f21e748d58d2c47fda7ed9be9dd",
          "url": "https://github.com/danielorihuela/SyMPC/commit/63cf891cd91634b4c049dea12d9c28eece7d60ad"
        },
        "date": 1621373355925,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_conv_model",
            "value": 0.2530602521889253,
            "unit": "iter/sec",
            "range": "stddev: 0.1315566460501798",
            "extra": "mean: 3.9516280859999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "spsharan2000@gmail.com",
            "name": "S P Sharan",
            "username": "Syzygianinfern0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4c83dd9ce936788cf53156503f17021ca83edee",
          "message": "Add len method (#224)",
          "timestamp": "2021-06-07T21:56:13+05:30",
          "tree_id": "2855bc5fc7ffdb9e7216ea703bcab9f7ef0871cf",
          "url": "https://github.com/danielorihuela/SyMPC/commit/a4c83dd9ce936788cf53156503f17021ca83edee"
        },
        "date": 1623091737224,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_inference_conv_model",
            "value": 0.10448987260291329,
            "unit": "iter/sec",
            "range": "stddev: 0.07125305343497433",
            "extra": "mean: 9.570305476400005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43314053+rasswanth-s@users.noreply.github.com",
            "name": "rasswanth",
            "username": "rasswanth-s"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e790dd651beca63f2594368e60c85388e85868ba",
          "message": "Modified RSTensor to use parallel execution (#247)\n\n* Modified RSTensor to use parallel execution\r\n\r\n* minor refactor\r\n\r\n* Added sanity check for share_ptrs and tests\r\n\r\n* Fix typo",
          "timestamp": "2021-06-24T16:36:50+05:30",
          "tree_id": "8c886ff6d0922bba9158b7b913dc7be334b33ad5",
          "url": "https://github.com/danielorihuela/SyMPC/commit/e790dd651beca63f2594368e60c85388e85868ba"
        },
        "date": 1624544792127,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/module/module_benchmark_test.py::test_run_inference_conv_model",
            "value": 0.136632432817093,
            "unit": "iter/sec",
            "range": "stddev: 0.14312623819942344",
            "extra": "mean: 7.318906495200002 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}