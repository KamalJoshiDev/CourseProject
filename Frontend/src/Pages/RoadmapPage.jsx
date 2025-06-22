import React, { useState } from 'react';

// DSA Roadmap Data
const dsaRoadmap = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    children: [
      {
        id: 'unit-1',
        title: 'Unit 1: Stack, Queue, Linked List',
        subtopics: [
          {
            id: 'stack',
            title: 'Stack',
            items: [
              { title: 'Stack Representation (Array & Linked List)', link: 'https://www.geeksforgeeks.org/stack-data-structure/' },
              { title: 'Infix to Postfix', link: 'https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/' },
              { title: 'Applications of Stack', link: 'https://www.geeksforgeeks.org/applications-of-stack-data-structure/' }
            ],
          },
          {
            id: 'queue',
            title: 'Queue',
            items: [
              { title: 'Queue Types', link: 'https://www.geeksforgeeks.org/queue-data-structure/' },
              { title: 'Priority Queue', link: 'https://www.geeksforgeeks.org/priority-queue-set-1-introduction/' },
              { title: 'Circular Queue', link: 'https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/' }
            ],
          },
          {
            id: 'linked-list',
            title: 'Linked List',
            items: [
              { title: 'Singly Linked List', link: 'https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/' },
              { title: 'Doubly Linked List', link: 'https://www.geeksforgeeks.org/doubly-linked-list/' },
              { title: 'Circular Linked List', link: 'https://www.geeksforgeeks.org/circular-linked-list/' }
            ],
          }
        ]
      },
      {
        id: 'unit-2',
        title: 'Unit 2: Trees & Graphs',
        subtopics: [
          {
            id: 'trees',
            title: 'Trees',
            items: [
              { title: 'Binary Trees', link: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
              { title: 'Binary Search Trees', link: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' },
              { title: 'Tree Traversals', link: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/' }
            ],
          },
          {
            id: 'graphs',
            title: 'Graphs',
            items: [
              { title: 'Graph Representation', link: 'https://www.geeksforgeeks.org/graph-and-its-representations/' },
              { title: 'BFS and DFS', link: 'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/' },
              { title: 'Minimum Spanning Tree', link: 'https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/' }
            ],
          }
        ]
      },
      {
        id: 'unit-3',
        title: 'Unit 3: Sorting & Searching',
        subtopics: [
          {
            id: 'sorting',
            title: 'Sorting Algorithms',
            items: [
              { title: 'Quick Sort', link: 'https://www.geeksforgeeks.org/quick-sort/' },
              { title: 'Merge Sort', link: 'https://www.geeksforgeeks.org/merge-sort/' },
              { title: 'Heap Sort', link: 'https://www.geeksforgeeks.org/heap-sort/' }
            ],
          },
          {
            id: 'searching',
            title: 'Searching Algorithms',
            items: [
              { title: 'Binary Search', link: 'https://www.geeksforgeeks.org/binary-search/' },
              { title: 'Linear Search', link: 'https://www.geeksforgeeks.org/linear-search/' },
              { title: 'Hashing', link: 'https://www.geeksforgeeks.org/hashing-data-structure/' }
            ],
          }
        ]
      },
      {
        id: 'unit-4',
        title: 'Unit 4: Advanced Data Structures',
        subtopics: [
          {
            id: 'advanced-trees',
            title: 'Advanced Trees',
            items: [
              { title: 'AVL Trees', link: 'https://www.geeksforgeeks.org/avl-tree-set-1-insertion/' },
              { title: 'Red-Black Trees', link: 'https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/' },
              { title: 'B-Trees', link: 'https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/' }
            ],
          },
          {
            id: 'advanced-concepts',
            title: 'Advanced Concepts',
            items: [
              { title: 'Trie', link: 'https://www.geeksforgeeks.org/trie-insert-and-search/' },
              { title: 'Segment Trees', link: 'https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/' },
              { title: 'Disjoint Set', link: 'https://www.geeksforgeeks.org/disjoint-set-data-structures/' }
            ],
          }
        ]
      },
      {
        id: 'unit-5',
        title: 'Unit 5: Algorithm Design',
        subtopics: [
          {
            id: 'algorithm-paradigms',
            title: 'Algorithm Paradigms',
            items: [
              { title: 'Divide and Conquer', link: 'https://www.geeksforgeeks.org/divide-and-conquer-introduction/' },
              { title: 'Greedy Algorithms', link: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
              { title: 'Dynamic Programming', link: 'https://www.geeksforgeeks.org/dynamic-programming/' }
            ],
          },
          {
            id: 'complexity',
            title: 'Complexity Analysis',
            items: [
              { title: 'Time Complexity', link: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
              { title: 'Space Complexity', link: 'https://www.geeksforgeeks.org/g-fact-86/' },
              { title: 'NP-Completeness', link: 'https://www.geeksforgeeks.org/np-completeness-set-1/' }
            ],
          }
        ]
      }
    ]
  }
];

// Computer Networks Roadmap Data
const cnRoadmap = [
  {
    id: 'cn',
    title: 'Computer Networks',
    children: [
      {
        id: 'cn-unit-1',
        title: 'Unit 1: Network Fundamentals',
        subtopics: [
          {
            id: 'network-basics',
            title: 'Network Basics',
            items: [
              { title: 'OSI Model', link: 'https://www.geeksforgeeks.org/layers-of-osi-model/' },
              { title: 'TCP/IP Model', link: 'https://www.geeksforgeeks.org/tcp-ip-model/' },
              { title: 'Network Topologies', link: 'https://www.geeksforgeeks.org/types-of-network-topology/' }
            ]
          },
          {
            id: 'network-types',
            title: 'Network Types',
            items: [
              { title: 'LAN, WAN, MAN', link: 'https://www.geeksforgeeks.org/types-of-area-networks-lan-man-and-wan/' },
              { title: 'Wireless Networks', link: 'https://www.geeksforgeeks.org/wireless-networks/' },
              { title: 'Network Devices', link: 'https://www.geeksforgeeks.org/network-devices-hub-repeater-bridge-switch-router-gateways/' }
            ]
          }
        ]
      },
      {
        id: 'cn-unit-2',
        title: 'Unit 2: Data Link Layer',
        subtopics: [
          {
            id: 'dll-basics',
            title: 'Data Link Basics',
            items: [
              { title: 'Framing', link: 'https://www.geeksforgeeks.org/framing-in-data-link-layer/' },
              { title: 'Error Detection', link: 'https://www.geeksforgeeks.org/error-detection-in-computer-networks/' },
              { title: 'Flow Control', link: 'https://www.geeksforgeeks.org/flow-control-in-data-link-layer/' }
            ]
          },
          {
            id: 'mac-protocols',
            title: 'MAC Protocols',
            items: [
              { title: 'ALOHA', link: 'https://www.geeksforgeeks.org/aloha-protocol-in-computer-network/' },
              { title: 'CSMA/CD', link: 'https://www.geeksforgeeks.org/carrier-sense-multiple-access-csma/' },
              { title: 'Ethernet', link: 'https://www.geeksforgeeks.org/ethernet-frame-format/' }
            ]
          }
        ]
      },
      {
        id: 'cn-unit-3',
        title: 'Unit 3: Network Layer',
        subtopics: [
          {
            id: 'ip-addressing',
            title: 'IP Addressing',
            items: [
              { title: 'IPv4 vs IPv6', link: 'https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6/' },
              { title: 'Subnetting', link: 'https://www.geeksforgeeks.org/ip-addressing-introduction-and-classful-addressing/' },
              { title: 'CIDR', link: 'https://www.geeksforgeeks.org/classless-inter-domain-routing-cidr/' }
            ]
          },
          {
            id: 'routing',
            title: 'Routing',
            items: [
              { title: 'Routing Algorithms', link: 'https://www.geeksforgeeks.org/types-of-routing/' },
              { title: 'RIP, OSPF', link: 'https://www.geeksforgeeks.org/routing-information-protocol-rip/' },
              { title: 'BGP', link: 'https://www.geeksforgeeks.org/border-gateway-protocol-bgp/' }
            ]
          }
        ]
      },
      {
        id: 'cn-unit-4',
        title: 'Unit 4: Transport Layer',
        subtopics: [
          {
            id: 'transport-protocols',
            title: 'Transport Protocols',
            items: [
              { title: 'TCP vs UDP', link: 'https://www.geeksforgeeks.org/differences-between-tcp-and-udp/' },
              { title: 'TCP Congestion Control', link: 'https://www.geeksforgeeks.org/tcp-congestion-control/' },
              { title: 'TCP 3-Way Handshake', link: 'https://www.geeksforgeeks.org/tcp-3-way-handshake-process/' }
            ]
          },
          {
            id: 'quality-service',
            title: 'Quality of Service',
            items: [
              { title: 'QoS Parameters', link: 'https://www.geeksforgeeks.org/quality-of-service-qos-in-atm/' },
              { title: 'Traffic Shaping', link: 'https://www.geeksforgeeks.org/traffic-shaping-in-computer-networks/' },
              { title: 'Leaky Bucket Algorithm', link: 'https://www.geeksforgeeks.org/leaky-bucket-algorithm/' }
            ]
          }
        ]
      },
      {
        id: 'cn-unit-5',
        title: 'Unit 5: Application Layer',
        subtopics: [
          {
            id: 'application-protocols',
            title: 'Application Protocols',
            items: [
              { title: 'HTTP/HTTPS', link: 'https://www.geeksforgeeks.org/http-non-persistent-persistent-connection/' },
              { title: 'FTP, SMTP', link: 'https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/' },
              { title: 'DNS', link: 'https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/' }
            ]
          },
          {
            id: 'network-security',
            title: 'Network Security',
            items: [
              { title: 'Firewalls', link: 'https://www.geeksforgeeks.org/introduction-of-firewall-in-computer-network/' },
              { title: 'VPN', link: 'https://www.geeksforgeeks.org/virtual-private-network-vpn-introduction/' },
              { title: 'SSL/TLS', link: 'https://www.geeksforgeeks.org/secure-socket-layer-ssl/' }
            ]
          }
        ]
      }
    ]
  }
];

// Operating Systems Roadmap Data
const osRoadmap = [
  {
    id: 'os',
    title: 'Operating Systems',
    children: [
      {
        id: 'os-unit-1',
        title: 'Unit 1: OS Basics',
        subtopics: [
          {
            id: 'os-concepts',
            title: 'OS Concepts',
            items: [
              { title: 'What is an OS?', link: 'https://www.geeksforgeeks.org/operating-systems/' },
              { title: 'Types of OS', link: 'https://www.geeksforgeeks.org/types-of-operating-systems/' },
              { title: 'System Calls', link: 'https://www.geeksforgeeks.org/introduction-of-system-call/' }
            ]
          },
          {
            id: 'processes',
            title: 'Processes',
            items: [
              { title: 'Process States', link: 'https://www.geeksforgeeks.org/states-of-a-process-in-operating-systems/' },
              { title: 'Process Scheduling', link: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/' },
              { title: 'Threads', link: 'https://www.geeksforgeeks.org/thread-in-operating-system/' }
            ]
          }
        ]
      },
      {
        id: 'os-unit-2',
        title: 'Unit 2: Memory Management',
        subtopics: [
          {
            id: 'memory-basics',
            title: 'Memory Basics',
            items: [
              { title: 'Memory Hierarchy', link: 'https://www.geeksforgeeks.org/memory-hierarchy-design-and-its-characteristics/' },
              { title: 'Paging', link: 'https://www.geeksforgeeks.org/paging-in-operating-system/' },
              { title: 'Segmentation', link: 'https://www.geeksforgeeks.org/segmentation-in-operating-system/' }
            ]
          },
          {
            id: 'virtual-memory',
            title: 'Virtual Memory',
            items: [
              { title: 'Page Replacement', link: 'https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/' },
              { title: 'Thrashing', link: 'https://www.geeksforgeeks.org/thrashing-in-operating-system/' },
              { title: 'Working Set Model', link: 'https://www.geeksforgeeks.org/working-set-model/' }
            ]
          }
        ]
      },
      {
        id: 'os-unit-3',
        title: 'Unit 3: Process Synchronization',
        subtopics: [
          {
            id: 'synchronization',
            title: 'Synchronization',
            items: [
              { title: 'Critical Section', link: 'https://www.geeksforgeeks.org/g-fact-70/' },
              { title: 'Semaphores', link: 'https://www.geeksforgeeks.org/semaphores-in-process-synchronization/' },
              { title: 'Monitors', link: 'https://www.geeksforgeeks.org/monitors-in-process-synchronization/' }
            ]
          },
          {
            id: 'deadlocks',
            title: 'Deadlocks',
            items: [
              { title: 'Deadlock Conditions', link: 'https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/' },
              { title: 'Banker\'s Algorithm', link: 'https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/' },
              { title: 'Deadlock Prevention', link: 'https://www.geeksforgeeks.org/deadlock-prevention/' }
            ]
          }
        ]
      },
      {
        id: 'os-unit-4',
        title: 'Unit 4: File Systems',
        subtopics: [
          {
            id: 'file-concepts',
            title: 'File Concepts',
            items: [
              { title: 'File System Basics', link: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/' },
              { title: 'Directory Structure', link: 'https://www.geeksforgeeks.org/structures-of-directory-in-operating-system/' },
              { title: 'File Allocation Methods', link: 'https://www.geeksforgeeks.org/file-allocation-methods/' }
            ]
          },
          {
            id: 'disk-scheduling',
            title: 'Disk Scheduling',
            items: [
              { title: 'Disk Structure', link: 'https://www.geeksforgeeks.org/disk-scheduling-algorithms/' },
              { title: 'RAID', link: 'https://www.geeksforgeeks.org/raid-redundant-arrays-of-independent-disks/' },
              { title: 'Disk Management', link: 'https://www.geeksforgeeks.org/disk-management/' }
            ]
          }
        ]
      },
      {
        id: 'os-unit-5',
        title: 'Unit 5: Advanced Topics',
        subtopics: [
          {
            id: 'linux-basics',
            title: 'Linux Basics',
            items: [
              { title: 'Linux Commands', link: 'https://www.geeksforgeeks.org/linux-commands/' },
              { title: 'Shell Scripting', link: 'https://www.geeksforgeeks.org/introduction-linux-shell-shell-scripting/' },
              { title: 'Process Management', link: 'https://www.geeksforgeeks.org/process-management-in-linux/' }
            ]
          },
          {
            id: 'virtualization',
            title: 'Virtualization',
            items: [
              { title: 'Virtual Machines', link: 'https://www.geeksforgeeks.org/virtualization-in-cloud-computing/' },
              { title: 'Docker Basics', link: 'https://www.geeksforgeeks.org/docker-tutorial/' },
              { title: 'Cloud Computing', link: 'https://www.geeksforgeeks.org/cloud-computing/' }
            ]
          }
        ]
      }
    ]
  }
];

// DBMS Roadmap Data
const dbmsRoadmap = [
  {
    id: 'dbms',
    title: 'Database Management Systems',
    children: [
      {
        id: 'dbms-unit-1',
        title: 'Unit 1: Database Fundamentals',
        subtopics: [
          {
            id: 'database-concepts',
            title: 'Database Concepts',
            items: [
              { title: 'What is DBMS?', link: 'https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/' },
              { title: 'DBMS vs File System', link: 'https://www.geeksforgeeks.org/difference-between-file-system-and-dbms/' },
              { title: '3-Tier Architecture', link: 'https://www.geeksforgeeks.org/dbms-three-schema-architecture/' }
            ]
          },
          {
            id: 'er-model',
            title: 'ER Model',
            items: [
              { title: 'ER Diagrams', link: 'https://www.geeksforgeeks.org/er-model-erdiagram/' },
              { title: 'Relational Model', link: 'https://www.geeksforgeeks.org/relational-model-in-dbms/' },
              { title: 'Keys in DBMS', link: 'https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/' }
            ]
          }
        ]
      },
      {
        id: 'dbms-unit-2',
        title: 'Unit 2: SQL & Normalization',
        subtopics: [
          {
            id: 'sql-basics',
            title: 'SQL Basics',
            items: [
              { title: 'SQL Commands', link: 'https://www.geeksforgeeks.org/sql-tutorial/' },
              { title: 'Joins', link: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/' },
              { title: 'Subqueries', link: 'https://www.geeksforgeeks.org/sql-sub-queries/' }
            ]
          },
          {
            id: 'normalization',
            title: 'Normalization',
            items: [
              { title: '1NF to 5NF', link: 'https://www.geeksforgeeks.org/normalization-in-dbms/' },
              { title: 'Functional Dependencies', link: 'https://www.geeksforgeeks.org/functional-dependency-and-attribute-closure/' },
              { title: 'Denormalization', link: 'https://www.geeksforgeeks.org/denormalization-in-databases/' }
            ]
          }
        ]
      },
      {
        id: 'dbms-unit-3',
        title: 'Unit 3: Transaction Management',
        subtopics: [
          {
            id: 'transactions',
            title: 'Transactions',
            items: [
              { title: 'ACID Properties', link: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/' },
              { title: 'Serializability', link: 'https://www.geeksforgeeks.org/concurrency-control-introduction/' },
              { title: 'Conflict Serializability', link: 'https://www.geeksforgeeks.org/conflict-serializability-in-dbms/' }
            ]
          },
          {
            id: 'concurrency',
            title: 'Concurrency Control',
            items: [
              { title: 'Locking Protocols', link: 'https://www.geeksforgeeks.org/concurrency-control-protocols-in-dbms/' },
              { title: 'Two Phase Locking', link: 'https://www.geeksforgeeks.org/two-phase-locking-protocol/' },
              { title: 'Timestamp Ordering', link: 'https://www.geeksforgeeks.org/timestamp-based-concurrency-control/' }
            ]
          }
        ]
      },
      {
        id: 'dbms-unit-4',
        title: 'Unit 4: Indexing & Hashing',
        subtopics: [
          {
            id: 'indexing',
            title: 'Indexing',
            items: [
              { title: 'B+ Trees', link: 'https://www.geeksforgeeks.org/introduction-of-b-tree/' },
              { title: 'Bitmap Indexing', link: 'https://www.geeksforgeeks.org/bitmap-indexing-in-dbms/' },
              { title: 'Index Selection', link: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/' }
            ]
          },
          {
            id: 'hashing',
            title: 'Hashing',
            items: [
              { title: 'Static Hashing', link: 'https://www.geeksforgeeks.org/hashing-in-dbms/' },
              { title: 'Dynamic Hashing', link: 'https://www.geeksforgeeks.org/extendible-hashing-dynamic-approach-to-dbms/' },
              { title: 'Collision Resolution', link: 'https://www.geeksforgeeks.org/hashing-set-2-separate-chaining/' }
            ]
          }
        ]
      },
      {
        id: 'dbms-unit-5',
        title: 'Unit 5: Advanced Topics',
        subtopics: [
          {
            id: 'distributed-db',
            title: 'Distributed DBMS',
            items: [
              { title: 'CAP Theorem', link: 'https://www.geeksforgeeks.org/cap-theorem-in-distributed-system/' },
              { title: 'Sharding', link: 'https://www.geeksforgeeks.org/sharding-in-dbms/' },
              { title: 'Replication', link: 'https://www.geeksforgeeks.org/data-replication-in-dbms/' }
            ]
          },
          {
            id: 'nosql',
            title: 'NoSQL Databases',
            items: [
              { title: 'MongoDB', link: 'https://www.geeksforgeeks.org/mongodb-an-introduction/' },
              { title: 'Redis', link: 'https://www.geeksforgeeks.org/introduction-to-redis/' },
              { title: 'Cassandra', link: 'https://www.geeksforgeeks.org/apache-cassandra-nosql-database/' }
            ]
          }
        ]
      }
    ]
  }
];

// Web Development Roadmap Data
const webRoadmap = [
  {
    id: 'web',
    title: 'Web Development',
    children: [
      {
        id: 'web-unit-1',
        title: 'Unit 1: Frontend Basics',
        subtopics: [
          {
            id: 'html-css',
            title: 'HTML & CSS',
            items: [
              { title: 'HTML5', link: 'https://www.geeksforgeeks.org/html-tutorials/' },
              { title: 'CSS Flexbox/Grid', link: 'https://www.geeksforgeeks.org/css-flexbox/' },
              { title: 'Responsive Design', link: 'https://www.geeksforgeeks.org/what-is-responsive-web-design/' }
            ]
          },
          {
            id: 'javascript',
            title: 'JavaScript',
            items: [
              { title: 'JS Basics', link: 'https://www.geeksforgeeks.org/javascript/' },
              { title: 'DOM Manipulation', link: 'https://www.geeksforgeeks.org/dom-document-object-model/' },
              { title: 'ES6 Features', link: 'https://www.geeksforgeeks.org/introduction-to-es6/' }
            ]
          }
        ]
      },
      {
        id: 'web-unit-2',
        title: 'Unit 2: Frontend Frameworks',
        subtopics: [
          {
            id: 'react',
            title: 'React.js',
            items: [
              { title: 'React Components', link: 'https://www.geeksforgeeks.org/reactjs-components/' },
              { title: 'State & Props', link: 'https://www.geeksforgeeks.org/reactjs-state-react/' },
              { title: 'React Hooks', link: 'https://www.geeksforgeeks.org/introduction-to-react-hooks/' }
            ]
          },
          {
            id: 'vue',
            title: 'Vue.js',
            items: [
              { title: 'Vue Basics', link: 'https://www.geeksforgeeks.org/vue-js-introduction-installation/' },
              { title: 'Vue Components', link: 'https://www.geeksforgeeks.org/vue-js-components/' },
              { title: 'Vuex', link: 'https://www.geeksforgeeks.org/vue-js-vuex/' }
            ]
          }
        ]
      },
      {
        id: 'web-unit-3',
        title: 'Unit 3: Backend Development',
        subtopics: [
          {
            id: 'nodejs',
            title: 'Node.js',
            items: [
              { title: 'Node Basics', link: 'https://www.geeksforgeeks.org/nodejs-tutorials/' },
              { title: 'Express.js', link: 'https://www.geeksforgeeks.org/express-js/' },
              { title: 'REST APIs', link: 'https://www.geeksforgeeks.org/rest-api-introduction/' }
            ]
          },
          {
            id: 'databases',
            title: 'Databases',
            items: [
              { title: 'MongoDB', link: 'https://www.geeksforgeeks.org/mongodb-an-introduction/' },
              { title: 'MySQL with Node', link: 'https://www.geeksforgeeks.org/how-to-connect-node-with-mysql/' },
              { title: 'ORM (Sequelize)', link: 'https://www.geeksforgeeks.org/sequelize-js-introduction/' }
            ]
          }
        ]
      },
      {
        id: 'web-unit-4',
        title: 'Unit 4: Authentication & Security',
        subtopics: [
          {
            id: 'auth',
            title: 'Authentication',
            items: [
              { title: 'JWT', link: 'https://www.geeksforgeeks.org/json-web-token-jwt/' },
              { title: 'OAuth', link: 'https://www.geeksforgeeks.org/oath2-authentication-with-google/' },
              { title: 'Session vs Token', link: 'https://www.geeksforgeeks.org/session-vs-token-based-authentication/' }
            ]
          },
          {
            id: 'security',
            title: 'Security',
            items: [
              { title: 'CORS', link: 'https://www.geeksforgeeks.org/cross-origin-resource-sharing-cors/' },
              { title: 'CSRF Protection', link: 'https://www.geeksforgeeks.org/csrf-protection-in-django/' },
              { title: 'XSS Prevention', link: 'https://www.geeksforgeeks.org/what-is-cross-site-scripting-xss/' }
            ]
          }
        ]
      },
      {
        id: 'web-unit-5',
        title: 'Unit 5: Deployment & DevOps',
        subtopics: [
          {
            id: 'deployment',
            title: 'Deployment',
            items: [
              { title: 'AWS/Heroku', link: 'https://www.geeksforgeeks.org/deploying-node-js-application-on-heroku/' },
              { title: 'Docker', link: 'https://www.geeksforgeeks.org/docker-tutorial/' },
              { title: 'CI/CD', link: 'https://www.geeksforgeeks.org/continuous-integration-continuous-deployment-ci-cd/' }
            ]
          },
          {
            id: 'performance',
            title: 'Performance',
            items: [
              { title: 'Caching', link: 'https://www.geeksforgeeks.org/caching-system-design-concept-for-beginners/' },
              { title: 'Load Balancing', link: 'https://www.geeksforgeeks.org/what-is-load-balancing/' },
              { title: 'WebSockets', link: 'https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/' }
            ]
          }
        ]
      }
    ]
  }
];

const NodeCard = ({ node, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`ml-${depth * 4} my-2`}>
      <div
        className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`w-5 h-5 mr-2 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-lg font-medium text-gray-900">{node.title}</span>
      </div>

      {isOpen && node.subtopics && (
        <div className="ml-6 border-l-2 border-indigo-200 pl-4">
          {node.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg mt-2">
                <span className="text-sm font-semibold text-indigo-600">{subtopic.title}</span>
              </div>
              <ul className="ml-4 mt-2 space-y-1">
                {subtopic.items.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 pl-4 border-l border-gray-200">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-[1rem] hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {isOpen && node.children && (
        <div className="ml-6 border-l-2 border-indigo-200 pl-4">
          {node.children.map((child) => (
            <NodeCard key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const SubjectTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dsa', name: 'DSA' },
    { id: 'cn', name: 'Computer Networks' },
    { id: 'os', name: 'Operating Systems' },
    { id: 'dbms', name: 'DBMS' },
    { id: 'web', name: 'Web Development' }
  ];

  return (
    <div className="flex overflow-x-auto pb-2 mb-6">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const RoadmapContent = ({ activeTab }) => {
  const getRoadmapData = () => {
    switch (activeTab) {
      case 'dsa':
        return dsaRoadmap;
      case 'cn':
        return cnRoadmap;
      case 'os':
        return osRoadmap;
      case 'dbms':
        return dbmsRoadmap;
      case 'web':
        return webRoadmap;
      default:
        return dsaRoadmap;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'dsa':
        return 'Data Structures & Algorithms';
      case 'cn':
        return 'Computer Networks';
      case 'os':
        return 'Operating Systems';
      case 'dbms':
        return 'Database Management Systems';
      case 'web':
        return 'Web Development';
      default:
        return 'Data Structures & Algorithms';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{getTitle()} Learning Path</h2>
      <div className="space-y-4">
        {getRoadmapData().map((node) => (
          <NodeCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
};

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState('dsa');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Computer Science Roadmaps
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Structured learning paths for BCA/MCA students
          </p>
        </div>

        <SubjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <RoadmapContent activeTab={activeTab} />
      </div>
    </div>
  );
}